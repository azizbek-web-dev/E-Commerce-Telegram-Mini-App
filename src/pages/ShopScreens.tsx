import { useCallback, useState } from 'react'
import { HomePage } from './HomePage'
import { ProductDetailPage } from './ProductDetailPage'
import { ProductListingPage } from './ProductListingPage'
import { TabPlaceholderPage } from './TabPlaceholderPage'
import { WishlistPage } from './WishlistPage'
import type { NavKey } from '../components/home/HomeBottomNav'

type Route = 'home' | 'listing' | 'wishlist' | 'cart' | 'settings' | 'product'

export function ShopScreens() {
  const [route, setRoute] = useState<Route>('home')
  const [navActive, setNavActive] = useState<NavKey>('home')
  const [returnRoute, setReturnRoute] = useState<Route>('listing')
  const [detailProductId, setDetailProductId] = useState<string | null>(null)

  const handleNav = useCallback((key: NavKey) => {
    setNavActive(key)
    setDetailProductId(null)
    if (key === 'home') setRoute('home')
    else if (key === 'search') setRoute('listing')
    else if (key === 'wishlist') setRoute('wishlist')
    else if (key === 'cart') setRoute('cart')
    else if (key === 'settings') setRoute('settings')
  }, [])

  const openListingFromHome = useCallback(() => {
    setRoute('listing')
    setNavActive('home')
  }, [])

  const openProduct = useCallback((id: string) => {
    setDetailProductId(id)
    setRoute((prev) => {
      if (prev !== 'product') {
        setReturnRoute(prev)
      }
      return 'product'
    })
  }, [])

  const backFromProduct = useCallback(() => {
    setDetailProductId(null)
    setRoute(returnRoute)
  }, [returnRoute])

  switch (route) {
    case 'product':
      if (!detailProductId) {
        return <ProductListingPage navActive={navActive} onNav={handleNav} onOpenProduct={openProduct} />
      }
      return (
        <ProductDetailPage
          productId={detailProductId}
          navActive={navActive}
          onNav={handleNav}
          onBack={backFromProduct}
          onOpenProduct={openProduct}
        />
      )
    case 'listing':
      return (
        <ProductListingPage navActive={navActive} onNav={handleNav} onOpenProduct={openProduct} />
      )
    case 'wishlist':
      return <WishlistPage navActive={navActive} onNav={handleNav} onOpenProduct={openProduct} />
    case 'cart':
      return <TabPlaceholderPage title="Cart — coming soon" navActive={navActive} onNav={handleNav} />
    case 'settings':
      return <TabPlaceholderPage title="Settings — coming soon" navActive={navActive} onNav={handleNav} />
    default:
      return (
        <HomePage
          navActive={navActive}
          onNav={handleNav}
          onOpenProductListing={openListingFromHome}
        />
      )
  }
}
