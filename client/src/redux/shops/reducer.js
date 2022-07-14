export const shops = (state = { shops: [] }, action) => {
  switch (action.type) {
    case 'GET_SHOPS':
      return {
        ...state,
        shops: action.payload,
      }
    default:
      return state
  }
}
