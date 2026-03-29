import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import { HomeProductCard } from './HomeProductCard'
import styles from './HomeTrendingProducts.module.css'

const products = [
  {
    image: homeAssets.trending1,
    title: 'IWC Schaffhausen 2021 Pilot Watch',
    description: 'Amet minim mollit non deserunt ullamco est sit.',
    price: '₹12,500',
    oldPrice: '₹18,000',
    discount: '30% Off',
    rating: '4.9',
    reviews: '12,450',
  },
  {
    image: homeAssets.trending2,
    title: 'Lace-Up White Sneakers',
    description: 'Amet minim mollit non deserunt ullamco est sit.',
    price: '₹2,999',
    oldPrice: '₹4,499',
    discount: '33% Off',
    rating: '4.6',
    reviews: '45,200',
  },
] as const

export function HomeTrendingProducts() {
  return (
    <section className={styles.section} aria-labelledby="trending-title">
      <div className={styles.bar}>
        <div className={styles.barLeft}>
          <h2 id="trending-title" className={styles.barTitle}>
            Trending Products
          </h2>
          <div className={styles.dateRow}>
            <AssetImg
              src={homeAssets.iconTrendingCalendar}
              alt=""
              className={styles.dateIcon}
            />
            <span className={styles.date}>Last Date 29/02/22</span>
          </div>
        </div>
        <button type="button" className={styles.viewAll}>
          View all
          <span className={styles.viewAllArrow} aria-hidden>
            →
          </span>
        </button>
      </div>
      <div className={styles.row}>
        {products.map((p) => (
          <HomeProductCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
