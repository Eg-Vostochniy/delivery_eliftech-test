import { useSelector } from 'react-redux'
import { OrderItem } from '../components/OrdersHistory/OrderItem'

export const History = () => {
  const { orders } = useSelector((state) => state.order)

  return (
    <div className='history'>
      {orders.map((ord) => (
        <OrderItem key={ord._id} order={ord} />
      ))}
    </div>
  )
}
