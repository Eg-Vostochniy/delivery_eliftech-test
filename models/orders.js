import mongoose from 'mongoose'

const ordersSchema = new mongoose.Schema({
  customer: String,
  address: String,
  email: String,
  phone: String,
  name: String,
  totalPrice: Number,
  order: [
    {
      name: String,
      price: Number,
      img: String,
    },
  ],
})

export const Orders = mongoose.model('orders', ordersSchema)
