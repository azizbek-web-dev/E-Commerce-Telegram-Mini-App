import { CatalogFilterBar } from '../components/listing/CatalogFilterBar'
import { ProductListingGrid } from '../components/listing/ProductListingGrid'
import { HomeHeader } from '../components/home/HomeHeader'
import { HomeScreenLayout } from '../components/home/HomeScreenLayout'
import { HomeSearchBar } from '../components/home/HomeSearchBar'
import type { NavKey } from '../components/home/HomeBottomNav'
import { productListingMock } from '../data/productListingMock'

type Props = {
  navActive?: NavKey
  onNav?: (key: NavKey) => void
  onOpenProduct?: (id: string) => void
}

export function ProductListingPage({ navActive = 'home', onNav, onOpenProduct }: Props) {
  return (
    <HomeScreenLayout navActive={navActive} onNav={onNav}>
      <HomeHeader />
      <HomeSearchBar />
      <CatalogFilterBar countLabel="52,082+ Items" />
      <ProductListingGrid items={productListingMock} onProductClick={onOpenProduct} />
    </HomeScreenLayout>
  )
}
