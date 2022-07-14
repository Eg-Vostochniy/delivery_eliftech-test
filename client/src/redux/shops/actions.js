import { shopsAPI } from '../../utils/services/shops'

export const shopsActions = {
  setShops: (payload) => {
    return { type: 'GET_SHOPS', payload }
  },
}
export const shopsThunks = {
  getShops: () => async (dispatch) => {
    try {
      const shops = await shopsAPI.getShops()
      dispatch(shopsActions.setShops(shops.data))
    } catch (error) {
      console.log(error)
    }
  },
}
