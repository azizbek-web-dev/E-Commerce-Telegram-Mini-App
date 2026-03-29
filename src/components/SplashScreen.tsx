import { useEffect, useRef, useState } from 'react'
import styles from './SplashScreen.module.css'

/** Brand mark: `public/brand/splash.png` */
export const SPLASH_IMAGE = '/brand/splash.png'

const MIN_VISIBLE_MS = 1800
const MAX_WAIT_MS = 4000
const FADE_MS = 280

type Props = { onDone: () => void }

export function SplashScreen({ onDone }: Props) {
  const [fadeOut, setFadeOut] = useState(false)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    let cancelled = false
    let finished = false
    let hardTimer: ReturnType<typeof setTimeout>
    let softTimer: ReturnType<typeof setTimeout>
    let fadeTimer: ReturnType<typeof setTimeout>

    const go = () => {
      if (cancelled || finished) return
      finished = true
      clearTimeout(hardTimer)
      clearTimeout(softTimer)
      setFadeOut(true)
      fadeTimer = setTimeout(() => doneRef.current(), FADE_MS)
    }

    const t0 = Date.now()
    hardTimer = setTimeout(go, MAX_WAIT_MS)

    const afterImage = () => {
      const left = Math.max(0, MIN_VISIBLE_MS - (Date.now() - t0))
      softTimer = setTimeout(go, left)
    }

    const probe = new Image()
    probe.onload = afterImage
    probe.onerror = afterImage
    probe.src = SPLASH_IMAGE

    return () => {
      cancelled = true
      clearTimeout(hardTimer)
      clearTimeout(softTimer)
      clearTimeout(fadeTimer)
    }
  }, [])

  return (
    <div
      className={`${styles.root} ${fadeOut ? styles.rootFade : ''}`}
      role="img"
      aria-label="Stylish"
    >
      <img className={styles.mark} src={SPLASH_IMAGE} alt="" draggable={false} />
    </div>
  )
}
