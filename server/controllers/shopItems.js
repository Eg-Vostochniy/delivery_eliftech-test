import { ShopItems } from '../models/shopItems.js'

export const shopItemsCtrl = {
  getShopItems: async (req, res) => {
    try {
      const shopItems = await ShopItems()

      res.json(shopItems)
    } catch (err) {
      return res.status(500).json({ msg: error.message })
    }
  },
}
