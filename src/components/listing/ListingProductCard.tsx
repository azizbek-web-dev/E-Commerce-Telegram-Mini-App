import { AssetImg } from '../home/AssetImg'
import styles from './ListingProductCard.module.css'

export type ListingProductCardProps = {
  id: string
  image: string
  title: string
  description: string
  /** e.g. "₹1,999" */
  price: string
  /** 0–5, step 0.5 (e.g. 3.5 = three full + one half) */
  rating: number
  /** Formatted review count, e.g. "5,22,455" */
  reviews: string
  /** Opens product detail when provided (e.g. listing / wishlist). */
  onOpen?: () => void
}

function StarRow({ value }: { value: number }) {
  const full = Math.floor(value)
  const half = value % 1 >= 0.5 && full < 5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className={styles.starRow} aria-hidden>
      {Array.from({ length: full }, (_, i) => (
        <span key={`f${i}`} className={styles.starOn}>
          ★
        </span>
      ))}
      {half ? (
        <span className={styles.starHalfWrap}>
          <span className={styles.starHalf}>★</span>
        </span>
      ) : null}
      {Array.from({ length: empty }, (_, i) => (
        <span key={`e${i}`} className={styles.starOff}>
          ☆
        </span>
      ))}
    </span>
  )
}

export function ListingProductCard({
  image,
  title,
  description,
  price,
  rating,
  reviews,
  onOpen,
}: ListingProductCardProps) {
  return (
    <article
      className={`${styles.card} ${onOpen ? styles.cardInteractive : ''}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (onOpen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onOpen()
        }
      }}
      tabIndex={onOpen ? 0 : undefined}
      role={onOpen ? 'button' : undefined}
    >
      <div className={styles.thumb}>
        <AssetImg src={image} alt="" className={styles.thumbImg} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.meta}>
          <StarRow value={rating} />
          <span className={styles.reviews}>{reviews}</span>
        </p>
      </div>
    </article>
  )
}
