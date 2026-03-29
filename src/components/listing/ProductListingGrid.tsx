import { ListingProductCard, type ListingProductCardProps } from './ListingProductCard'
import styles from './ProductListingGrid.module.css'

type Props = {
  items: ListingProductCardProps[]
  onProductClick?: (id: string) => void
}

export function ProductListingGrid({ items, onProductClick }: Props) {
  return (
    <div className={styles.grid} role="list">
      {items.map((item) => (
        <div key={item.id} className={styles.cell} role="listitem">
          <ListingProductCard
            {...item}
            onOpen={onProductClick ? () => onProductClick(item.id) : undefined}
          />
        </div>
      ))}
    </div>
  )
}
