import { Router } from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = Router()

const userController = new UserController()

userRouter.post('/signup', userController.signUp)
userRouter.post('/login', userController.login)