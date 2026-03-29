import type { NavKey } from '../components/home/HomeBottomNav'
import { HomeHeader } from '../components/home/HomeHeader'
import { HomeScreenLayout } from '../components/home/HomeScreenLayout'
import { HomeSearchBar } from '../components/home/HomeSearchBar'
import styles from './TabPlaceholderPage.module.css'

type Props = {
  title: string
  navActive: NavKey
  onNav: (key: NavKey) => void
}

export function TabPlaceholderPage({ title, navActive, onNav }: Props) {
  return (
    <HomeScreenLayout navActive={navActive} onNav={onNav}>
      <HomeHeader />
      <HomeSearchBar />
      <p className={styles.hint}>{title}</p>
    </HomeScreenLayout>
  )
}
