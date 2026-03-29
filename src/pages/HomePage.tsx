import { HomeAllFeatured } from '../components/home/HomeAllFeatured'
import { HomeBottomNav } from '../components/home/HomeBottomNav'
import { HomeDealOfTheDay } from '../components/home/HomeDealOfTheDay'
import { HomeHeader } from '../components/home/HomeHeader'
import { HomeHeroCarousel } from '../components/home/HomeHeroCarousel'
import { HomeNewArrivals } from '../components/home/HomeNewArrivals'
import { HomePromoBlocks } from '../components/home/HomePromoBlocks'
import { HomeSearchBar } from '../components/home/HomeSearchBar'
import { HomeSponsored } from '../components/home/HomeSponsored'
import { HomeTrendingProducts } from '../components/home/HomeTrendingProducts'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.shell}>
      <div className={styles.scroll}>
        <HomeHeader />
        <HomeSearchBar />
        <HomeAllFeatured />
        <HomeHeroCarousel />
        <HomeDealOfTheDay />
        <HomePromoBlocks />
        <HomeTrendingProducts />
        <HomeNewArrivals />
        <HomeSponsored />
      </div>
      <HomeBottomNav />
    </div>
  )
}
