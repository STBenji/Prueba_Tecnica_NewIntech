import { Router } from 'express'
import userRoute from './vehicles.route.js'

const router = Router()

router.get('/test', (_, res) => res.status(200).json("It's a pleasure that someone sees this"))

export { router, userRoute }
