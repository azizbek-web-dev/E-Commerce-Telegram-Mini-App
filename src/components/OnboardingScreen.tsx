import { useCallback, useState } from 'react'
import {
  ONBOARDING_DONE_KEY,
  ONBOARDING_SLIDES,
} from '../data/onboardingSlides'
import styles from './OnboardingScreen.module.css'

type Props = { onFinish: () => void }

function SlideFigure({ src }: { src: string }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return <div className={styles.figureFallback} aria-hidden />
  }

  return (
    <img
      className={styles.figure}
      src={src}
      alt=""
      draggable={false}
      onError={() => setBroken(true)}
    />
  )
}

export function OnboardingScreen({ onFinish }: Props) {
  const [index, setIndex] = useState(0)
  const total = ONBOARDING_SLIDES.length
  const slide = ONBOARDING_SLIDES[index]

  const complete = useCallback(() => {
    try {
      localStorage.setItem(ONBOARDING_DONE_KEY, '1')
    } catch {
      /* ignore */
    }
    onFinish()
  }, [onFinish])

  const next = useCallback(() => {
    if (index >= total - 1) {
      complete()
      return
    }
    setIndex((i) => i + 1)
  }, [complete, index, total])

  const prev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1))
  }, [])

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <span className={styles.step}>
          {index + 1}/{total}
        </span>
        <button type="button" className={styles.skip} onClick={complete}>
          Skip
        </button>
      </header>

      <div className={styles.body}>
        <SlideFigure key={slide.image} src={slide.image} />
        <h1 className={styles.title}>{slide.title}</h1>
        <p className={styles.text}>{slide.body}</p>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerStart}>
          {index > 0 ? (
            <button type="button" className={styles.prev} onClick={prev}>
              Prev
            </button>
          ) : (
            <span className={styles.footerSpacer} aria-hidden />
          )}
        </div>
        <div className={styles.dots} role="tablist" aria-label="Onboarding steps">
          {ONBOARDING_SLIDES.map((_, i) => (
            <span
              key={i}
              role="tab"
              aria-selected={i === index}
              className={i === index ? styles.dotActive : styles.dot}
            />
          ))}
        </div>
        <div className={styles.footerEnd}>
          <button type="button" className={styles.next} onClick={next}>
            Next
          </button>
        </div>
      </footer>
    </div>
  )
}
