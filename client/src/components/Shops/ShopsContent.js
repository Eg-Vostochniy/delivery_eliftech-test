import { ShopCard } from './ShopCard'

export const ShopsContent = ({ products }) => {
  return (
    <div className='shops__content-inner'>
      {products.map((p) => (
        <ShopCard key={p.name} product={p} />
      ))}
    </div>
  )
}
