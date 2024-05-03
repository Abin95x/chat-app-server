import express from 'express'
const userRoute = express()
import { userSignup, } from '../controllers/userController.js'
userRoute.post('/signup',userSignup)

export default userRoute