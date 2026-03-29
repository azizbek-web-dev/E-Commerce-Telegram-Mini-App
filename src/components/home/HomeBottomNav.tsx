import styles from './HomeBottomNav.module.css'
import {
  NavIconCart,
  NavIconHome,
  NavIconSearch,
  NavIconSettings,
  NavIconWishlist,
} from './navBottomIcons'

export type NavKey = 'home' | 'wishlist' | 'cart' | 'search' | 'settings'

type NavItem = {
  key: NavKey
  label: string
  fab?: boolean
}

const items: NavItem[] = [
  { key: 'home', label: 'Home' },
  { key: 'wishlist', label: 'Wishlist' },
  { key: 'cart', label: '', fab: true },
  { key: 'search', label: 'Search' },
  { key: 'settings', label: 'Setting' },
]

type Props = {
  activeKey?: NavKey
  onNavigate?: (key: NavKey) => void
}

export function HomeBottomNav({ activeKey = 'home', onNavigate }: Props) {
  return (
    <nav className={styles.nav} aria-label="Main">
      {items.map((item) => {
        const active = !item.fab && item.key === activeKey
        return (
          <button
            key={item.key}
            type="button"
            className={`${styles.item} ${active ? styles.itemActive : ''} ${item.fab ? styles.fab : ''}`}
            aria-label={item.fab ? 'Cart' : item.label}
            aria-current={active ? 'page' : undefined}
            onClick={() => onNavigate?.(item.key)}
          >
            <span className={item.fab ? styles.fabIconWrap : styles.icon} aria-hidden>
              {item.key === 'home' ? (
                <NavIconHome />
              ) : item.key === 'wishlist' ? (
                <NavIconWishlist />
              ) : item.key === 'cart' ? (
                <NavIconCart />
              ) : item.key === 'search' ? (
                <NavIconSearch />
              ) : (
                <NavIconSettings />
              )}
            </span>
            {!item.fab && item.label ? <span className={styles.label}>{item.label}</span> : null}
          </button>
        )
      })}
    </nav>
  )
}
