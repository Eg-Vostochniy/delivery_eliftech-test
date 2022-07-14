import { Orders } from '../models/orders.js'

export const order = {
  createOrder: async (req, res) => {
    try {
      const { customerInfo, cart, totalPrice } = req.body
      const newOrder = new Orders({
        customer: req.user._id,
        address: customerInfo.address,
        email: customerInfo.email,
        phone: customerInfo.phone,
        name: customerInfo.name,
        order: cart,
        totalPrice,
      })

      await newOrder.save()

      res.json(newOrder)
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getOrders: async (req, res) => {
    try {
      const { user } = req

      const orders = await Orders.find({ customer: user._id })

      res.json(orders)
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
}
