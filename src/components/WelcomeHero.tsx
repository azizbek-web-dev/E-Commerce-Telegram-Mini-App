import { useCallback } from 'react'
import { WELCOME_BG, WELCOME_DONE_KEY } from '../data/welcome'
import styles from './WelcomeHero.module.css'

type Props = { onContinue: () => void }

export function WelcomeHero({ onContinue }: Props) {
  const handleClick = useCallback(() => {
    try {
      localStorage.setItem(WELCOME_DONE_KEY, '1')
    } catch {
      /* ignore */
    }
    onContinue()
  }, [onContinue])

  return (
    <div className={styles.root}>
      <div className={styles.bg} style={{ backgroundImage: `url(${WELCOME_BG})` }} />
      <div className={styles.scrim} aria-hidden />
      <div className={styles.content}>
        <h1 className={styles.headline}>
          You want Authentic,
          <br />
          here you go!
        </h1>
        <p className={styles.sub}>Find it here, buy it now!</p>
        <button type="button" className={styles.cta} onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  )
}
