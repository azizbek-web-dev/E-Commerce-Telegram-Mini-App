import { HOME_HEADER_LOGO, homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeHeader.module.css'

export function HomeHeader() {
  return (
    <header className={styles.header}>
      <button type="button" className={styles.iconBtn} aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className={styles.brand}>
        <AssetImg src={HOME_HEADER_LOGO} alt="" className={styles.brandMark} />
        <span className={styles.brandName}>Stylish</span>
      </div>
      <button type="button" className={styles.avatarBtn} aria-label="Profile">
        <AssetImg src={homeAssets.headerAvatar} alt="" className={styles.avatar} />
      </button>
    </header>
  )
}
