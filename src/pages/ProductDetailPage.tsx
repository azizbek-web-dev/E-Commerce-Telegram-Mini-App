import { useEffect, useMemo, useState } from 'react'
import { CatalogFilterBar } from '../components/listing/CatalogFilterBar'
import { ProductListingGrid } from '../components/listing/ProductListingGrid'
import { AssetImg } from '../components/home/AssetImg'
import type { NavKey } from '../components/home/HomeBottomNav'
import { HomeScreenLayout } from '../components/home/HomeScreenLayout'
import { homeAssets } from '../data/homeAssets'
import { getProductDetail, similarExcept } from '../data/productDetailData'
import styles from './ProductDetailPage.module.css'

type Props = {
  productId: string
  navActive?: NavKey
  onNav?: (key: NavKey) => void
  onBack: () => void
  onOpenProduct: (id: string) => void
}

function StarRow({ value }: { value: number }) {
  const full = Math.floor(value)
  const half = value % 1 >= 0.5 && full < 5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className={styles.starsOnly} aria-hidden>
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

export function ProductDetailPage({
  productId,
  navActive = 'home',
  onNav,
  onBack,
  onOpenProduct,
}: Props) {
  const p = useMemo(() => getProductDetail(productId), [productId])
  const similar = useMemo(() => similarExcept(p.id, 4), [p.id])

  const [slide, setSlide] = useState(0)
  const [size, setSize] = useState(p.defaultSizeUk)
  const [descOpen, setDescOpen] = useState(false)

  useEffect(() => {
    setSize(p.defaultSizeUk)
    setSlide(0)
    setDescOpen(false)
  }, [productId, p.defaultSizeUk])

  const slides = p.heroImages
  const goNext = () => setSlide((i) => (i + 1) % slides.length)

  return (
    <HomeScreenLayout navActive={navActive} onNav={onNav}>
      <div className={styles.scroll}>
        <header className={styles.topBar}>
          <button type="button" className={styles.iconBtn} onClick={onBack} aria-label="Back">
            <AssetImg src={homeAssets.pdpBack} alt="" />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Cart">
            <AssetImg src={homeAssets.pdpHeaderCart} alt="" />
          </button>
        </header>

        <div className={styles.hero}>
          <AssetImg src={slides[slide] ?? slides[0]} alt="" className={styles.heroImg} />
          <button type="button" className={styles.heroNext} onClick={goNext} aria-label="Next image">
            <AssetImg src={homeAssets.pdpCarouselNext} alt="" />
          </button>
        </div>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === slide ? styles.dotActive : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <p className={styles.sizeLabel}>Size: {size}</p>
        <div className={styles.sizeRow}>
          {p.sizesUk.map((s) => (
            <button
              key={s}
              type="button"
              className={`${styles.sizeChip} ${s === size ? styles.sizeChipActive : ''}`}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <h1 className={styles.productTitle}>{p.title}</h1>
        <p className={styles.subtitle}>{p.subtitle}</p>
        <div className={styles.ratingRow}>
          <StarRow value={p.rating} />
          <span className={styles.reviewCount}>{p.reviews}</span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.oldPrice}>{p.oldPrice}</span>
          <span className={styles.salePrice}>{p.salePrice}</span>
          <span className={styles.discount}>{p.discount}</span>
        </div>

        <p className={`${styles.desc} ${!descOpen ? styles.descCollapsed : ''}`}>{p.description}</p>
        <button type="button" className={styles.moreBtn} onClick={() => setDescOpen((v) => !v)}>
          {descOpen ? 'Less' : '...More'}
        </button>

        <AssetImg src={homeAssets.pdpBadgeRow} alt="" className={styles.badgeStrip} />

        <div className={styles.ctaRow}>
          <button type="button" className={styles.ctaBlue}>
            <AssetImg src={homeAssets.pdpGoCart} alt="" />
            Go to cart
          </button>
          <button type="button" className={styles.ctaGreen}>
            <AssetImg src={homeAssets.pdpHandBuy} alt="" />
            Buy Now
          </button>
        </div>

        <div className={styles.delivery}>
          Delivery in
          <strong>1 within Hour</strong>
        </div>

        <div className={styles.secondaryRow}>
          <button type="button" className={styles.secondaryBtn}>
            <AssetImg src={homeAssets.pdpEyeSimilar} alt="" />
            View Similar
          </button>
          <button type="button" className={styles.secondaryBtn}>
            <AssetImg src={homeAssets.pdpCompareDoc} alt="" />
            Add to Compare
          </button>
        </div>

        <h2 className={styles.similarTitle}>Similar To</h2>
        <CatalogFilterBar countLabel="282+ Items" />
        <ProductListingGrid items={similar} onProductClick={onOpenProduct} />
      </div>
    </HomeScreenLayout>
  )
}
