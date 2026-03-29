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
        <div className={styles.cardBody}>
          <div className={styles.titleRow}>
            <h3 className={styles.cardTitle}>Special Offers</h3>
            <span className={styles.titleEmoji} aria-hidden>
              😱
            </span>
          </div>
          <p className={styles.cardText}>
            We make sure you get the offer you need at best prices
          </p>
        </div>
      </div>

      <div className={styles.heels}>
        <div className={styles.heelsVisual}>
          <AssetImg
            src={homeAssets.promoHeelsYellowBar}
            alt=""
            className={styles.yellowBar}
          />
          <div className={styles.artWrap}>
            <AssetImg
              src={homeAssets.promoHeelsSparkles}
              alt=""
              className={styles.sparkles}
            />
            <AssetImg
              src={homeAssets.promoHeelsShoes}
              alt=""
              className={styles.shoes}
            />
          </div>
        </div>
        <div className={styles.heelsCopy}>
          <h3 className={styles.heelsTitle}>Flat and Heels</h3>
          <p className={styles.heelsSub}>Stand a chance to get rewarded</p>
          <button type="button" className={styles.heelsBtn}>
            Visit now
            <span className={styles.heelsBtnArrow} aria-hidden>
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
