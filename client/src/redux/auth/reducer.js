export const auth = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH':
      return action.payload

    default:
      return state
  }
}
