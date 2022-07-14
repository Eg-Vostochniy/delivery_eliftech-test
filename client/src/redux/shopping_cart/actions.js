import { strParser } from '../../utils/strParser'

export const shoppingCartActions = {
  setShoppingCart: (payload) => {
    return { type: 'SET_SHOPPING_CART', payload }
  },
}
export const shoppingCartThunks = {
  addShoppingCart: (cart) => async (dispatch) => {
    try {
      const storageCart = await localStorage.getItem('shoppingCart')
      await localStorage.setItem(
        'shoppingCart',
        storageCart !== null
          ? storageCart + ',' + JSON.stringify(cart)
          : JSON.stringify(cart)
      )
      dispatch(shoppingCartActions.setShoppingCart(cart))
    } catch (error) {
      console.log(error)
    }
  },
  getShoppingCart: () => async (dispatch) => {
    try {
      const cart = await localStorage.getItem('shoppingCart')
      if (cart)
        strParser(cart).obj.forEach((o) =>
          dispatch(shoppingCartActions.setShoppingCart(o))
        )
    } catch (error) {
      console.log(error)
    }
  },
}
