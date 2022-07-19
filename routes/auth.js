import express from 'express'
import { auth } from '../controllers/auth.js'
import { valid } from '../middleware/valid.js'

const router = express.Router()

router.post('/register', valid.register, auth.register)
router.post('/login', valid.login, auth.login)

router.get('/logout', auth.logout)
router.get('/refresh_token', auth.refreshAccessToken)

export default router
