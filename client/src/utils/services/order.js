import axios from 'axios'

export const orderAPI = {
  createOrder: async (order, token) => {
    return await axios.post(`api/create_order`, order, {
      headers: { Authorization: token },
    })
  },
  getOrders: async (token) => {
    return await axios.get('api/get_orders', {
      headers: { Authorization: token },
    })
  },
}
