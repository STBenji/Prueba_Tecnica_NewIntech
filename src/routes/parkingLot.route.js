import { Router } from 'express'
import { deleteParking, getParking, postParking, updateParking } from '../controllers/parkingLot.controller.js'
import { checkAvailableParking, checkDataParking } from '../middlewares/parkingLot.middleware.js'

const parkingRoute = Router()

parkingRoute.get('/parking', getParking)
parkingRoute.post('/createParking', checkDataParking, checkAvailableParking, postParking)
parkingRoute.put('/updateParking/:id', updateParking)
parkingRoute.delete('/deleteParking/:id', deleteParking)

export default parkingRoute
