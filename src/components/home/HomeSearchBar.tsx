import { homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeSearchBar.module.css'

export function HomeSearchBar() {
  return (
    <div className={styles.wrap}>
      <span className={styles.leadIcon} aria-hidden>
        <AssetImg src={homeAssets.iconSearch} alt="" className={styles.barIcon} />
      </span>
      <input
        className={styles.input}
        type="search"
        placeholder="Search any Product..."
        readOnly
        aria-readonly="true"
      />
      <button type="button" className={styles.trailIcon} aria-label="Voice search">
        <AssetImg src={homeAssets.iconMic} alt="" className={styles.barIcon} />
      </button>
    </div>
  )
}
