import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import { HomeProductCard } from './HomeProductCard'
import styles from './HomeDealOfTheDay.module.css'

const products = [
  {
    image: homeAssets.dealProduct1,
    title: 'Women Printed Kurta',
    description: 'Amet minim mollit non deserunt ullamco est sit.',
    price: '₹1,500',
    oldPrice: '₹3,000',
    discount: '50% Off',
    rating: '4.8',
    reviews: '2,56,890',
  },
  {
    image: homeAssets.dealProduct2,
    title: 'HRX by Hrithik Roshan',
    description: 'Amet minim mollit non deserunt ullamco est sit.',
    price: '₹2,499',
    oldPrice: '₹4,999',
    discount: '50% Off',
    rating: '4.7',
    reviews: '89,120',
  },
] as const

export function HomeDealOfTheDay() {
  return (
    <section className={styles.section} aria-labelledby="deal-title">
      <div className={styles.bar}>
        <div className={styles.barLeft}>
          <h2 id="deal-title" className={styles.barTitle}>
            Deal of the Day
          </h2>
          <div className={styles.timerRow}>
            <AssetImg src={homeAssets.iconDealTimer} alt="" className={styles.timerIcon} />
            <span className={styles.timer}>22h 55m 20s remaining</span>
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
        <div className={styles.moreChev} aria-hidden>
          ›
        </div>
      </div>
    </section>
  )
}
