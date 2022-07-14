import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../components/Button'
import { ShoppingCartInputs } from '../components/ShoppingCart/ShoppingCartInputs'
import { ShoppingCartItem } from '../components/ShoppingCart/ShoppingCartItem'
import { useAppDispatch } from '../hooks/useAppDispatch'

export const ShoppingCart = ({ shoppingCart }) => {
  const form = useRef()
  const { createOrder } = useAppDispatch()

  const { token } = useSelector((state) => state.auth)
  const { cart } = useSelector((state) => state.shoppingCart)

  const [customerInfo, setCustomerInfo] = useState()
  let totalPrice = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCustomerInfo({
      [form.current[0].name]: form.current[0].value,
      [form.current[1].name]: form.current[1].value,
      [form.current[2].name]: form.current[2].value,
      [form.current[3].name]: form.current[3].value,
    })
    customerInfo &&
      (await createOrder({ customerInfo, cart, totalPrice }, token))
  }
  return (
    <form className='shopping__cart' ref={form} onSubmit={handleSubmit}>
      <div className='shopping__cart-content'>
        <ShoppingCartInputs />
        <div className='shopping__cart-list'>
          {shoppingCart.map((sItem, index) => (
            <ShoppingCartItem
              key={sItem.name + sItem.img + index}
              img={sItem.img}
              name={sItem.name}
              price={sItem.price}
            />
          ))}
        </div>
      </div>
      <div className='shopping__cart-submit'>
        <span>Total price: {totalPrice}$</span>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}
