import styles from './HomeSearchBar.module.css'

export function HomeSearchBar() {
  return (
    <div className={styles.wrap}>
      <span className={styles.leadIcon} aria-hidden>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <input
        className={styles.input}
        type="search"
        placeholder="Search any Product..."
        readOnly
        aria-readonly="true"
      />
      <button type="button" className={styles.trailIcon} aria-label="Voice search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M8 11v1a4 4 0 008 0v-1M12 19v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
