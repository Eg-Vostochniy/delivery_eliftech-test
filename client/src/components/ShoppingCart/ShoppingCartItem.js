export const ShoppingCartItem = ({ img, name, price }) => {
  return (
    <div className='shopping__cart-item'>
      <div className='shopping__cart-item--img'>
        <img src={img} alt='' />
      </div>
      <div className='shopping__cart-item__content'>
        <div className='shopping__cart-item--info'>
          <h4>{name}</h4>
          <h5>Price: {price}$</h5>
        </div>
      </div>
    </div>
  )
}
