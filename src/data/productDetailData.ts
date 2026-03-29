import type { ListingProductCardProps } from '../components/listing/ListingProductCard'
import { homeAssets } from './homeAssets'
import { productListingMock } from './productListingMock'

export type ProductDetailModel = {
  id: string
  title: string
  subtitle: string
  heroImages: string[]
  sizesUk: string[]
  defaultSizeUk: string
  oldPrice: string
  salePrice: string
  discount: string
  rating: number
  reviews: string
  description: string
}

const defaultHero = [homeAssets.pdpHero1, homeAssets.pdpHero2, homeAssets.pdpHero3]

const shared = {
  subtitle: "Vision Alta Men's Shoes Size (All Colours)",
  sizesUk: ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'],
  defaultSizeUk: '7 UK',
  oldPrice: '₹2,999',
  discount: '50% Off',
  description:
    "The Nike Zoom Vomero 5 is turned on with a double dose of performance. You've got lightweight Zoom Air cushioning plus breathable mesh, so you get the best of both worlds.",
} as const

export function getProductDetail(productId: string): ProductDetailModel {
  const fromList = productListingMock.find((p) => p.id === productId)
  if (fromList) return mergeListing(fromList)
  return {
    id: 'nike-default',
    title: 'Nike Sneakers',
    heroImages: [...defaultHero],
    salePrice: '₹1,500',
    rating: 4.5,
    reviews: '56,890',
    subtitle: shared.subtitle,
    sizesUk: [...shared.sizesUk],
    defaultSizeUk: shared.defaultSizeUk,
    oldPrice: shared.oldPrice,
    discount: shared.discount,
    description: shared.description,
  }
}

function mergeListing(p: ListingProductCardProps): ProductDetailModel {
  return {
    id: p.id,
    title: p.title,
    subtitle: shared.subtitle,
    heroImages: [p.image, homeAssets.pdpHero2, homeAssets.pdpHero3],
    sizesUk: [...shared.sizesUk],
    defaultSizeUk: shared.defaultSizeUk,
    oldPrice: shared.oldPrice,
    salePrice: p.price,
    discount: shared.discount,
    rating: p.rating,
    reviews: p.reviews,
    description: `${p.description}. ${shared.description}`,
  }
}

export function similarExcept(productId: string, limit = 4): ListingProductCardProps[] {
  return productListingMock.filter((p) => p.id !== productId).slice(0, limit)
}
