import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomePromoBlocks.module.css'

export function HomePromoBlocks() {
  return (
    <section className={styles.section} aria-label="Promotions">
      <div className={styles.card}>
        <div className={styles.specialThumb}>
          <AssetImg src={homeAssets.promoSpecial} alt="" className={styles.specialImg} />
        </div>
        <div>
          <h3 className={styles.cardTitle}>Special Offer</h3>
          <p className={styles.cardText}>
            We make sure you get the offer you need at best price.
          </p>
        </div>
      </div>

      <div className={styles.heels}>
        <div className={styles.heelsImg}>
          <AssetImg src={homeAssets.promoHeels} alt="" className={styles.heelsAsset} />
        </div>
        <div className={styles.heelsCopy}>
          <h3 className={styles.heelsTitle}>Flat and Heels</h3>
          <p className={styles.heelsSub}>Stand a chance to get rewarded</p>
          <button type="button" className={styles.heelsBtn}>
            Visit now
          </button>
        </div>
      </div>
    </section>
  )
}
