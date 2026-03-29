import { AssetImg } from './AssetImg'
import styles from './HomeProductCard.module.css'

export type HomeProductCardProps = {
  image: string
  title: string
  description: string
  price: string
  oldPrice: string
  discount: string
  /** Omit to show only stars + review count (Deal row style). */
  rating?: string
  reviews: string
}

export function HomeProductCard({
  image,
  title,
  description,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
}: HomeProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <AssetImg src={image} alt="" className={styles.thumbImg} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.priceRow}>
        <span className={styles.price}>{price}</span>
        <span className={styles.old}>{oldPrice}</span>
        <span className={styles.disc}>{discount}</span>
      </div>
      <p className={styles.meta}>
        <span className={styles.stars} aria-hidden>
          ★★★★☆
        </span>
        {rating != null && rating !== '' ? (
          <>
            {' '}
            <span className={styles.rating}>{rating}</span>
            {' '}
          </>
        ) : null}
        <span className={styles.reviews}>{reviews}</span>
      </p>
    </article>
  )
}
