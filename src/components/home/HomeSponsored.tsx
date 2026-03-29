import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeSponsored.module.css'

export function HomeSponsored() {
  return (
    <section className={styles.section} aria-labelledby="sponsored-title">
      <h2 id="sponsored-title" className={styles.title}>
        Sponsored
      </h2>
      <div className={styles.card}>
        <div className={styles.media}>
          <AssetImg src={homeAssets.sponsored} alt="" className={styles.mediaImg} />
          <span className={styles.badge}>UP TO 50% OFF</span>
        </div>
        <button type="button" className={styles.footer}>
          <span>up to 50% Off</span>
          <span className={styles.chev} aria-hidden>
            ›
          </span>
        </button>
      </div>
    </section>
  )
}
