import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeNewArrivals.module.css'

export function HomeNewArrivals() {
  return (
    <section className={styles.section} aria-labelledby="new-arrivals-title">
      <h2 id="new-arrivals-title" className={styles.srOnly}>
        New arrivals
      </h2>
      <div className={styles.banner}>
        <AssetImg src={homeAssets.newArrivalsBanner} alt="" className={styles.bannerImg} />
      </div>
      <p className={styles.caption}>New Arrivals / Summer &apos;25 Collections</p>
      <button type="button" className={styles.cta}>
        View all
      </button>
    </section>
  )
}
