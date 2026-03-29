import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeAllFeatured.module.css'

const categories = [
  { key: 'beauty', label: 'Beauty', src: homeAssets.categoryBeauty },
  { key: 'fashion', label: 'Fashion', src: homeAssets.categoryFashion },
  { key: 'kids', label: 'Kids', src: homeAssets.categoryKids },
  { key: 'mens', label: 'Mens', src: homeAssets.categoryMen },
  { key: 'womens', label: 'Womens', src: homeAssets.categoryWomen },
] as const

export function HomeAllFeatured() {
  return (
    <section className={styles.section} aria-labelledby="home-featured-title">
      <div className={styles.head}>
        <h2 id="home-featured-title" className={styles.title}>
          All Featured
        </h2>
        <div className={styles.actions}>
          <button type="button" className={styles.chip}>
            Sort
            <AssetImg src={homeAssets.iconSort} alt="" className={styles.chipIconImg} />
          </button>
          <button type="button" className={styles.chip}>
            Filter
            <AssetImg src={homeAssets.iconFilter} alt="" className={styles.chipIconImg} />
          </button>
        </div>
      </div>
      <div className={styles.scroller}>
        {categories.map((c) => (
          <button key={c.key} type="button" className={styles.cat}>
            <span className={styles.catThumb}>
              <AssetImg src={c.src} alt="" className={styles.catImg} />
            </span>
            <span className={styles.catLabel}>{c.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
