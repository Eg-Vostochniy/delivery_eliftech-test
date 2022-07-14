import axios from 'axios'

export const shopsAPI = {
  getShops: async () => {
    return await axios.get(`api/get_shop_items`)
  },
}
