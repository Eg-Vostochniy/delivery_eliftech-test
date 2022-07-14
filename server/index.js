import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import routes from './routes/index.js'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes.auth)
app.use('/api', routes.shopItems)
app.use('/api', routes.order)

const URI = process.env.MONGODB_URI

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err
    console.log('Mongo connected')
  }
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server start on port: ${PORT}`)
})

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, `${process.env.ACCESS_TOKEN}`, { expiresIn: '20m' })
}

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, `${process.env.REFRESH_TOKEN}`, { expiresIn: '30d' })
}
