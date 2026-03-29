import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeAllFeatured.module.css'

const categories = [
  { key: 'beauty', label: 'Beauty', src: homeAssets.categoryBeauty },
  { key: 'fashion', label: 'Fashion', src: homeAssets.categoryFashion },
  { key: 'kids', label: 'Kids', src: homeAssets.categoryKids },
  { key: 'men', label: 'Men', src: homeAssets.categoryMen },
  { key: 'women', label: 'Women', src: homeAssets.categoryWomen },
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
            <span className={styles.chipIcon} aria-hidden>
              ↕
            </span>
            Sort
          </button>
          <button type="button" className={styles.chip}>
            <span className={styles.chipIcon} aria-hidden>
              ⏚
            </span>
            Filter
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
