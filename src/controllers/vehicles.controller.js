import pool from '../config/db.config.js'

/* Get vehicles of the DB */
export const getVehicles = (req, res) => {
  try {
    pool.query('SELECT * FROM vehicles', (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Error fetching vehicles.' })
      } else {
        res.status(200).json(result)
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}

/* post vehicles of the DB */
export const postVehicles = (req, res) => {
  const { type_vehicle, brand, model, color, plate } = req.body
  try {
    const sql = 'INSERT INTO vehicles (type_vehicle, brand, model, color, plate) VALUES (?, ?, ?, ?, ?)'
    const values = [type_vehicle, brand, model, color, plate]

    pool.query(sql, values, (error) => {
      if (error) {
        res.status(500).json({ error: 'Error creating a vehicle.' })
      } else {
        res.status(200).json({ message: 'Vehículo creado existosamente.' })
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}

/* update vehicle of the DB for id_vehicle */
export const updateVehicle = (req, res) => {
  const { id } = req.params
  const { type_vehicle, brand, model, color, plate } = req.body

  try {
    const sql = 'UPDATE vehicles SET type_vehicle = IFNULL(?, type_vehicle), brand = IFNULL(?, brand), model = IFNULL(?, model), color = IFNULL(?, color), plate = IFNULL(?, plate) WHERE id_vehicle = ?'
    const values = [type_vehicle, brand, model, color, plate, id]

    pool.query(sql, values, (error) => {
      if (error) {
        res.status(500).json({ error: 'Error updating vehicle.' })
      } else {
        res.status(200).json({ message: 'Vehicle updated successfully.' })
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}

/* delete vehicle of the DB for id_vehicle */
export const deleteVehicle = (req, res) => {
  const { id } = req.params

  try {
    const sql = 'DELETE FROM vehicles WHERE id_vehicle = ?'
    const values = [id]

    pool.query(sql, values, (error) => {
      if (error) {
        res.status(500).json({ error: 'Error deleting vehicle.' })
      } else {
        res.status(200).json({ message: 'Vehicle deleted successfully.' })
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}
