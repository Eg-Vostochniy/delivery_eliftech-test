import express from 'express'
import { shopItemsCtrl } from '../controllers/shopItems.js'

const router = express.Router()

router.get('/get_shop_items', shopItemsCtrl.getShopItems)

export default router
