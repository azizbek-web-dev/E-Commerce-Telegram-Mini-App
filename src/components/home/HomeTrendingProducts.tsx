import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import { HomeProductCard } from './HomeProductCard'
import styles from './HomeTrendingProducts.module.css'

const products = [
  {
    image: homeAssets.trendingIwcWatch,
    title: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹650',
    oldPrice: '₹1599',
    discount: '60% off',
    rating: '4.9',
    reviews: '12,450',
  },
  {
    image: homeAssets.trendingWhiteSneakers,
    title: 'Labbin White Sneakers For Men and Female',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹650',
    oldPrice: '₹1250',
    discount: '70% off',
    rating: '4.6',
    reviews: '45,200',
  },
  {
    image: homeAssets.trendingHighTopSneaker,
    title: 'High-Top Court Sneakers',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹750',
    oldPrice: '₹1999',
    discount: '62% off',
    rating: '4.7',
    reviews: '8,320',
  },
] as const

type Props = {
  onViewAll?: () => void
}

export function HomeTrendingProducts({ onViewAll }: Props) {
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
        <button type="button" className={styles.viewAll} onClick={onViewAll}>
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
