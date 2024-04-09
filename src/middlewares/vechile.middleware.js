import { vehicleSchema } from '../schemas/vehicle.schema.js'

export const checkDataVehicle = async (req, res, next) => {
  const { type_vehicle, brand, model, color, plate } = req.body
  try {
    const result = vehicleSchema.safeParse({ type_vehicle, brand, model, color, plate })
    if (!result.success) return res.status(400).send({ message: 'invalid data, enter the necessary fields!' })

    return next()
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}
