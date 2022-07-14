import { useCallback } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { Button } from '../Button'

export const ShopCard = ({ product }) => {
  const { addShoppingCart } = useAppDispatch()
  const handleClick = useCallback(() => {
    addShoppingCart(product)
  })
  return (
    <div className='shop__card'>
      <div className='shop__card-img'>
        <img src={product.img} alt='product' />
      </div>
      <h4 className='shop__card-name'>{product.name}</h4>
      <h5 className='shop__card-price'>{product.price}$</h5>
      <div className='shop__card-btn'>
        <Button handleClick={handleClick}>Add to Cart</Button>
      </div>
    </div>
  )
}
