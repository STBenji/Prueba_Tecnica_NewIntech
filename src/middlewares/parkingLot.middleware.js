import pool from '../config/db.config.js'
import { parkingSchema } from '../schemas/parkingLot.schema.js'

export const checkDataParking = async (req, res, next) => {
  const { type_vehicle, brand, model, color, plate, entry_date } = req.body
  try {
    const result = parkingSchema.safeParse({ type_vehicle, brand, model, color, plate, entry_date })
    if (!result.success) return res.status(400).send({ message: 'invalid data, enter the necessary fields' })

    return next()
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}

export const checkAvailableParking = (req, res, next) => {
  const { type_vehicle } = req.body
  let maxParkingLimit
  let vehicleType

  if (type_vehicle === 'carro') {
    maxParkingLimit = 5
    vehicleType = 'carros'
  } else if (type_vehicle === 'moto') {
    maxParkingLimit = 10
    vehicleType = 'motos'
  } else {
    return res.status(400).json({ error: 'Invalid vehicle type.' })
  }

  const sqlCountVehicles = `
    SELECT COUNT(*) AS count
    FROM vehicles
    INNER JOIN parking_lot ON vehicles.id_vehicle = parking_lot.id_vehicle
    WHERE vehicles.type_vehicle = ?
  `
  pool.query(sqlCountVehicles, [type_vehicle], (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error retrieving the number of parked vehicles.' })
    }

    const count = result[0].count

    if (count >= maxParkingLimit) {
      return res.status(400).json({ error: `No available parking spaces for ${vehicleType}.` })
    }

    next()
  })
}
