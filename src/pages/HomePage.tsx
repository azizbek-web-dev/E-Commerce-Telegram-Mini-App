import { HomeAllFeatured } from '../components/home/HomeAllFeatured'
import { HomeDealOfTheDay } from '../components/home/HomeDealOfTheDay'
import { HomeHeader } from '../components/home/HomeHeader'
import { HomeHeroCarousel } from '../components/home/HomeHeroCarousel'
import { HomeNewArrivals } from '../components/home/HomeNewArrivals'
import { HomePromoBlocks } from '../components/home/HomePromoBlocks'
import { HomeScreenLayout } from '../components/home/HomeScreenLayout'
import { HomeSearchBar } from '../components/home/HomeSearchBar'
import { HomeSponsored } from '../components/home/HomeSponsored'
import { HomeTrendingProducts } from '../components/home/HomeTrendingProducts'
import type { NavKey } from '../components/home/HomeBottomNav'

type Props = {
  navActive?: NavKey
  onNav?: (key: NavKey) => void
  onOpenProductListing?: () => void
}

export function HomePage({ navActive = 'home', onNav, onOpenProductListing }: Props) {
  return (
    <HomeScreenLayout navActive={navActive} onNav={onNav}>
      <HomeHeader />
      <HomeSearchBar />
      <HomeAllFeatured />
      <HomeHeroCarousel />
      <HomeDealOfTheDay />
      <HomePromoBlocks />
      <HomeTrendingProducts onViewAll={onOpenProductListing} />
      <HomeNewArrivals />
      <HomeSponsored />
    </HomeScreenLayout>
  )
}
