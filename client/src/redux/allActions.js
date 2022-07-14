import { authActions, authThunks } from './auth/actions'
import { orderActions, orderThunks } from './order/actions'
import {
  shoppingCartActions,
  shoppingCartThunks,
} from './shopping_cart/actions'
import { shopsActions, shopsThunks } from './shops/actions'

export const allActions = {
  ...shopsActions,
  ...shopsThunks,
  ...shoppingCartActions,
  ...shoppingCartThunks,
  ...authActions,
  ...authThunks,
  ...orderActions,
  ...orderThunks,
}
