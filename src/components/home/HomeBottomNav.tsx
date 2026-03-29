import styles from './HomeBottomNav.module.css'

type NavItem = {
  key: string
  label: string
  active: boolean
  fab?: boolean
}

const items: NavItem[] = [
  { key: 'home', label: 'Home', active: true },
  { key: 'wishlist', label: 'Wishlist', active: false },
  { key: 'cart', label: 'Cart', active: false, fab: true },
  { key: 'search', label: 'Search', active: false },
  { key: 'settings', label: 'Setting', active: false },
]

export function HomeBottomNav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className={`${styles.item} ${item.active ? styles.itemActive : ''} ${item.fab ? styles.fab : ''}`}
        >
          <span className={styles.icon} aria-hidden>
            {item.key === 'home' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            ) : item.key === 'wishlist' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-7-4.5-7-10a5 5 0 019.5-2.5A5 5 0 0120 11c0 5.5-8 10-8 10z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            ) : item.key === 'cart' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6h15l-1.5 9h-12z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="9" cy="20" r="1" fill="currentColor" />
                <circle cx="18" cy="20" r="1" fill="currentColor" />
              </svg>
            ) : item.key === 'search' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
