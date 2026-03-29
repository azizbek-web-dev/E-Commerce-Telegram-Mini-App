import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeHeroCarousel.module.css'

export function HomeHeroCarousel() {
  return (
    <section className={styles.section} aria-label="Promo banner">
      <div className={styles.card}>
        <div className={styles.copy}>
          <p className={styles.badge}>50-40% OFF</p>
          <p className={styles.line}>Now in (product)</p>
          <p className={styles.lineMuted}>All colours</p>
          <button type="button" className={styles.cta}>
            Shop Now
            <span aria-hidden> →</span>
          </button>
        </div>
        <div className={styles.visual}>
          <AssetImg src={homeAssets.heroBanner} alt="" className={styles.heroImg} />
        </div>
      </div>
      <div className={styles.dots} aria-hidden>
        <span className={styles.dot} />
        <span className={`${styles.dot} ${styles.dotOn}`} />
        <span className={styles.dot} />
      </div>
    </section>
  )
}
