import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeNewArrivals.module.css'

export function HomeNewArrivals() {
  return (
    <section className={styles.section} aria-labelledby="new-arrivals-title">
      <div className={styles.card}>
        <div className={styles.banner}>
          <AssetImg src={homeAssets.newArrivalsBanner} alt="" className={styles.bannerImg} />
        </div>
        <div className={styles.footer}>
          <div className={styles.copy}>
            <h2 id="new-arrivals-title" className={styles.title}>
              New Arrivals
            </h2>
            <p className={styles.subtitle}>Summer&apos; 25 Collections</p>
          </div>
          <button type="button" className={styles.cta}>
            View all
            <span className={styles.ctaArrow} aria-hidden>
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
