import { Router } from 'express'
import { deleteVehicle, getVehicles, postVehicles, updateVehicle } from '../controllers/vehicles.controller.js'
import { checkDataVehicle } from '../middlewares/vechile.middleware.js'

const vehicleRoute = Router()

vehicleRoute.get('/vehicles', getVehicles)
vehicleRoute.post('/createVehicle', checkDataVehicle, postVehicles)
vehicleRoute.put('/updateVehicle/:id', updateVehicle)
vehicleRoute.delete('/deleteVehicle/:id', deleteVehicle)

export default vehicleRoute
