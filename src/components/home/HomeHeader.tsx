import { HOME_HEADER_LOGO, homeAssets } from '../../data/homeAssets'
import { AssetImg } from './AssetImg'
import styles from './HomeHeader.module.css'

export function HomeHeader() {
  return (
    <header className={styles.header}>
      <button type="button" className={styles.iconBtn} aria-label="Menu">
        <AssetImg src={homeAssets.iconMenu} alt="" className={styles.menuIcon} />
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
