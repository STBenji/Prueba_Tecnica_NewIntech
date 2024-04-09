import { Router } from 'express'
import { deleteVehicle, getVehicles, postVehicles, updateVehicle } from '../controllers/vehicles.controller.js'

const userRoute = Router()

userRoute.get('/vehicles', getVehicles)
userRoute.post('/createVehicle', postVehicles)
userRoute.put('/updateVehicle/:id', updateVehicle)
userRoute.delete('/deleteVehicle/:id', deleteVehicle)

export default userRoute
