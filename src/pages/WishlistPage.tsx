import type { NavKey } from '../components/home/HomeBottomNav'
import { HomeHeader } from '../components/home/HomeHeader'
import { HomeScreenLayout } from '../components/home/HomeScreenLayout'
import { HomeSearchBar } from '../components/home/HomeSearchBar'
import { ProductListingGrid } from '../components/listing/ProductListingGrid'
import { wishlistMock } from '../data/wishlistMock'
import styles from './WishlistPage.module.css'

type Props = {
  navActive: NavKey
  onNav: (key: NavKey) => void
  onOpenProduct?: (id: string) => void
}

export function WishlistPage({ navActive, onNav, onOpenProduct }: Props) {
  return (
    <HomeScreenLayout navActive={navActive} onNav={onNav}>
      <HomeHeader />
      <HomeSearchBar />
      <section className={styles.section} aria-labelledby="wishlist-heading">
        <h1 id="wishlist-heading" className={styles.title}>
          Wishlist
        </h1>
        <p className={styles.sub}>{wishlistMock.length} items saved</p>
        <ProductListingGrid items={wishlistMock} onProductClick={onOpenProduct} />
      </section>
    </HomeScreenLayout>
  )
}
