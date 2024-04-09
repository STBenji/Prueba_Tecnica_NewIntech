import { Router } from 'express'
import { deleteParking, getParking, postParking, updateParking } from '../controllers/parkingLot.controller.js'

const parkingRoute = Router()

parkingRoute.get('/parking', getParking)
parkingRoute.post('/createParking', postParking)
parkingRoute.put('/updateParking/:id', updateParking)
parkingRoute.delete('/deleteParking/:id', deleteParking)

export default parkingRoute
