import { parkingSchema } from '../schemas/parkingLot.schema.js'

export const checkDataParking = async (req, res, next) => {
  const { type_vehicle, brand, model, color, plate, entry_date, idVehicle } = req.body
  try {
    const result = parkingSchema.safeParse({ type_vehicle, brand, model, color, plate, entry_date, idVehicle })
    if (!result.success) return res.status(400).send({ message: 'invalid data, enter the necessary fields' })

    return next()
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}
