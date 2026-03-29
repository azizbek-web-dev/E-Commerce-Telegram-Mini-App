import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from '../home/AssetImg'
import styles from './CatalogFilterBar.module.css'

type Props = {
  /** e.g. "52,082+ Items"; omit to show only Sort / Filter (right-aligned). */
  countLabel?: string
}

export function CatalogFilterBar({ countLabel }: Props) {
  return (
    <div className={`${styles.bar} ${countLabel ? '' : styles.barCompact}`}>
      {countLabel ? <span className={styles.count}>{countLabel}</span> : null}
      <div className={styles.actions}>
        <button type="button" className={styles.actionBtn}>
          <span className={styles.iconWrap} aria-hidden>
            <AssetImg src={homeAssets.iconSort} alt="" className={styles.actionIcon} />
          </span>
          <span className={styles.actionLabel}>Sort</span>
        </button>
        <button type="button" className={styles.actionBtn}>
          <span className={styles.iconWrap} aria-hidden>
            <AssetImg src={homeAssets.iconFilter} alt="" className={styles.actionIcon} />
          </span>
          <span className={styles.actionLabel}>Filter</span>
        </button>
      </div>
    </div>
  )
}
