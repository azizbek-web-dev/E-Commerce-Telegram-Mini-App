import type { ReactNode } from 'react'
import { HomeBottomNav, type NavKey } from './HomeBottomNav'
import styles from './HomeScreenLayout.module.css'

type Props = {
  children: ReactNode
  /** Which tab appears selected in the bottom bar */
  navActive?: NavKey
  /** Fired when the user taps a bottom-nav item */
  onNav?: (key: NavKey) => void
}

export function HomeScreenLayout({ children, navActive = 'home', onNav }: Props) {
  return (
    <div className={styles.shell}>
      <div className={styles.scroll}>{children}</div>
      <HomeBottomNav activeKey={navActive} onNavigate={onNav} />
    </div>
  )
}
