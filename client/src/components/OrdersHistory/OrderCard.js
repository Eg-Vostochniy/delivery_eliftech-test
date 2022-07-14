export const OrderCard = ({ order }) => {
  return (
    <div key={order._id + order.name} className='order__list-card'>
      <img src={order.img} alt='' />
      <div className='order__list-card--info'>
        <span>{order.name}:</span>
        <span>{order.price}$</span>
      </div>
    </div>
  )
}
