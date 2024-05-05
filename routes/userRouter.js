import express from 'express'
const userRoute = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { userSignup, } from '../controllers/userController.js'

userRoute.post('/signup', sanitizeInput, userSignup)

export default userRoute