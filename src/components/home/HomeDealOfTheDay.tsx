import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import { HomeProductCard } from './HomeProductCard'
import styles from './HomeDealOfTheDay.module.css'

const products = [
  {
    image: homeAssets.dealProductKurta,
    title: 'Women Printed Kurta',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹1500',
    oldPrice: '₹2499',
    discount: '40% Off',
    reviews: '56890',
  },
  {
    image: homeAssets.dealProductHrxSneaker,
    title: 'HRX by Hrithik Roshan',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹2499',
    oldPrice: '₹4999',
    discount: '50% Off',
    reviews: '344567',
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
      </div>
    </section>
  )
}
