import { orderAPI } from '../../utils/services/order'
import { shoppingCartActions } from '../shopping_cart/actions'

export const orderActions = {
  setOrders: (payload) => {
    return { type: 'SET_ORDERS', payload }
  },
  addNewOrder: (payload) => {
    return { type: 'ADD_NEW_ORDER', payload }
  },
}

export const orderThunks = {
  createOrder: (order, token) => async (dispatch) => {
    try {
      const newOrder = await orderAPI.createOrder(order, token)
      dispatch(orderActions.addNewOrder(newOrder.data))
      dispatch(shoppingCartActions.setShoppingCart([]))
      await localStorage.removeItem('shoppingCart')
    } catch (error) {
      console.log(error)
    }
  },
  getOrders: (token) => async (dispatch) => {
    try {
      const orders = await orderAPI.getOrders(token)
      dispatch(orderActions.setOrders(orders.data))
    } catch (error) {
      console.log(error)
    }
  },
}
