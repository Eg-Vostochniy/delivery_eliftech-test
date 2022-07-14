export const shoppingCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'SET_SHOPPING_CART':
      return {
        ...state,
        cart:
          Object.keys(action.payload).length > 0
            ? [...state.cart, action.payload]
            : action.payload,
      }
    default:
      return state
  }
}
