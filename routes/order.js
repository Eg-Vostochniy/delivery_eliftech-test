import express from 'express'
import { order } from '../controllers/order.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/create_order', auth, order.createOrder)
router.get('/get_orders', auth, order.getOrders)

export default router
