import pool from '../config/db.config.js'

/* Get parking records from the DB */
export const getParking = (req, res) => {
  try {
    pool.query('SELECT vehicles.*, parking_lot.entry_date, parking_lot.closing_hour FROM vehicles INNER JOIN parking_lot ON vehicles.id_vehicle = parking_lot.id_vehicle;', (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Error fetching parking records.' })
      } else {
        res.status(200).json(result)
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}

/* Post parking record to the DB */
export const postParking = (req, res) => {
  const { type_vehicle, brand, model, color, plate, entry_date } = req.body
  try {
    /* Insert vehicle */
    const sql = 'INSERT INTO vehicles (type_vehicle, brand, model, color, plate) VALUES (?, ?, ?, ?, ?)'
    const values = [type_vehicle, brand, model, color, plate]

    pool.query(sql, values, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Error creating a vehicle.' })
      } else {
        let idVehicle = result.insertId

        /* Insert register of parking lot */
        const sqlRegister = 'INSERT INTO parking_lot (id_vehicle, entry_date) VALUES (?, ?)'
        const valuesRegister = [idVehicle, entry_date]

        pool.query(sqlRegister, valuesRegister, (error) => {
          if (error) {
            res.status(500).json({ error: 'Error creating a parking record.' })
          } else {
            res.status(200).json({ message: 'Parking record created successfully.' })
          }
        })
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred with the server, please try again later ', error: error })
  }
}

/* Update parking record in the DB for id_vehicle */
export const updateParking = (req, res) => {
  const { id } = req.params
  const { entry_date, closing_hour } = req.body

  try {
    const sql = 'UPDATE parking_lot SET entry_date = IFNULL(?, entry_date), closing_hour = IFNULL(?, closing_hour) WHERE id_parking = ?'
    const values = [entry_date, closing_hour, id]

    pool.query(sql, values, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error updating parking record.' })
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Parking record updated successfully.' })
        } else {
          res.status(404).json({ error: 'Parking record not found.' })
        }
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}

/* Delete parking record from the DB for id_vehicle */
export const deleteParking = (req, res) => {
  const { id } = req.params

  try {
    const sql = 'DELETE FROM parking_lot WHERE id_parking = ?'
    const values = [id]

    pool.query(sql, values, (error) => {
      if (error) {
        res.status(500).json({ error: 'Error deleting parking record.' })
      } else {
        res.status(200).json({ message: 'Vehicle deleted successfully.' })
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred with the server, please try again later.', error: error })
  }
}
