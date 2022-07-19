import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import routes from './routes/index.js'
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/api', routes.auth)
app.use('/api', routes.shopItems)
app.use('/api', routes.order)

//const URI = process.env.MONGODB_URI

mongoose.connect(
  'mongodb+srv://siemens:123@cluster0.vmfw7.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err
    console.log('Mongo connected')
  }
)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'))
  })
}

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
