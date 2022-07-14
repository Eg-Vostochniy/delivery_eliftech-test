import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { shops } from './shops/reducer'
import { auth } from './auth/reducer'
import { order } from './order/reducer'
import { shoppingCart } from './shopping_cart/reducer'

const rootReducer = combineReducers({
  shops,
  shoppingCart,
  auth,
  order,
})

export const store = createStore(
  rootReducer,
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)
