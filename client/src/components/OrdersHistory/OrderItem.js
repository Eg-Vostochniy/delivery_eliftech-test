import { OrderCard } from './OrderCard'

export const OrderItem = ({ order }) => {
  return (
    <div key={order._id} className='order__list-item'>
      <div className='order__list-orders'>
        {order.order.map((o) => (
          <OrderCard key={o._id} order={o} />
        ))}
      </div>
      <div className='history__order-cutomer--info'>
        <span>Address: {order.address}</span>
        <span>Phone: {order.phone}</span>
        <span>Name: {order.name}</span>
        <span>Email: {order.email}</span>
      </div>
      <div className='order__list-price'>Total price: {order.totalPrice}$</div>
    </div>
  )
}
