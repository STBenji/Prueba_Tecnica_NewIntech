import { Router } from 'express'
import vehicleRoute from './vehicles.route.js'
import parkingRoute from './parkingLot.route.js'

const router = Router()

router.get('/test', (_, res) => res.status(200).json("It's a pleasure that someone sees this"))

export { router, vehicleRoute, parkingRoute }
