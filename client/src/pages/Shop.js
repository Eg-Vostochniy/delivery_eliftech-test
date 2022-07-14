import { ShopsContent } from '../components/Shops/ShopsContent'
import { ShopsNav } from '../components/Shops/ShopsNav'
import smile from '../img/pngegg.png'

export const Shop = ({ products }) => {
  return (
    <div className='shop'>
      <div className='shop__nav'>
        <ShopsNav />
      </div>
      <div className='shop__content'>
        {products === undefined ? (
          <div className='shop__content-info'>
            <img src={smile} alt='smile' />
            <span>Please select the shop</span>
          </div>
        ) : (
          <ShopsContent products={products} />
        )}
      </div>
    </div>
  )
}
