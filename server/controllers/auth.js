import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateAccessToken, generateRefreshToken } from '../index.js'

export const auth = {
  register: async (req, res) => {
    try {
      const { username, email, password, cf_password } = req.body

      const user_name = await User.findOne({ username })
      if (user_name)
        return res.status(400).json({ msg: 'This user name already exist' })

      if (password !== cf_password)
        return res.status(400).json({ msg: 'Passwords missmatch' })

      const user_email = await User.findOne({ email })
      if (user_email)
        return res.status(400).json({ msg: 'This email already exist' })

      const hash_pass = await bcrypt.hash(password, 12)

      const newUser = new User({
        username,
        email,
        password: hash_pass,
      })

      const access_token = generateAccessToken({ id: newUser._id })
      const refresh_token = generateRefreshToken({ id: newUser._id })

      res.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })

      await newUser.save()

      res.json({
        msg: 'Register success',
        token: access_token,
        user: {
          ...newUser._doc,
          password: '',
        },
      })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })
      if (!user) return res.status(400).json({ msg: 'Data is incorrect' })

      const isMath = await bcrypt.compare(password, user.password)
      if (!isMath) return res.status(400).json({ msg: 'Data is incorrect' })

      const access_token = generateAccessToken({ id: user._id })
      const refresh_token = generateRefreshToken({ id: user._id })

      res.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })

      res.json({
        msg: 'Login success',
        token: access_token,
        user: {
          ...user._doc,
          password: '',
        },
      })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie('refresh_token', { path: '/api/refresh_token' })
      return res.json({ msg: 'Logout success' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  refreshAccessToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refresh_token
      if (!rf_token) return res.status(400).json({ msg: 'Please login' })

      jwt.verify(
        rf_token,
        `${process.env.REFRESH_TOKEN}`,
        async (err, result) => {
          if (err) return res.status(400).json({ msg: 'Please login' })

          const user = await User.findById(result.id).select('-password')
          if (!user) return res.status(400).json({ msg: 'User undefined' })

          const token = generateAccessToken({ id: result.id })

          res.json({
            msg: 'Login success',
            token,
            user,
          })
        }
      )
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
}
