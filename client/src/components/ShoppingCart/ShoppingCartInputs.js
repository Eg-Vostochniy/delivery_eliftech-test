import { ShoppingCartInputItem } from './ShoppingCartInputItem'

const CART_INPUT_DATA = [
  {
    name: 'Address',
    inptType: 'text',
    inptName: 'address',
    inptPlaceholder: 'Input your address',
  },
  {
    name: 'Email',
    inptType: 'email',
    inptName: 'email',
    inptPlaceholder: 'Input your email',
  },
  {
    name: 'Phone',
    inptType: 'phone',
    inptName: 'phone',
    inptPlaceholder: 'Input your phone',
  },
  {
    name: 'Name',
    inptType: 'text',
    inptName: 'name',
    inptPlaceholder: 'Input your name',
  },
]

export const ShoppingCartInputs = () => {
  return (
    <div className='shopping__cart-inputs'>
      {CART_INPUT_DATA.map((iData) => (
        <ShoppingCartInputItem
          key={iData.name}
          name={iData.name}
          inptType={iData.inptType}
          inptName={iData.inptName}
          inptPlaceholder={iData.inptPlaceholder}
        />
      ))}
    </div>
  )
}
