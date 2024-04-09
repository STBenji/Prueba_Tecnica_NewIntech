import pool from '../config/db.config.js'

/* Get vehicles of the DB */
export const getVehicles = (req, res) => {
  try {
    pool.query('SELECT * FROM vehicles', (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Error al obtener los vehículos.' })
      } else {
        res.status(200).json(result)
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener los vehículos.' })
  }
}

/* post vehicles of the DB */
export const postVehicles = (req, res) => {
  const { type_vehicle, brand, model, color, plate } = req.body
  try {
    const sql = 'INSERT INTO vehicles (type_vehicle, brand, model, color, plate) VALUES (?, ?, ?, ?, ?)'
    const values = [type_vehicle, brand, model, color, plate]

    pool.query(sql, values, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Error al crear un vehículo' })
      } else {
        res.status(200).json({ message: 'Vehículo creado existosamente.' })
      }
    })

    console.log(idVehicle)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error en el servido al momento de crear un vehículo.' })
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
        res.status(500).json({ error: 'Error al actualizar el vehículo' })
      } else {
        res.status(200).json({ message: 'Vehículo actualizado exitosamente.' })
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor al momento de actualizar un vehículo.' })
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
        res.status(500).json({ error: 'Error al eliminar el vehículo' })
      } else {
        res.status(200).json({ message: 'Vehículo eliminado exitosamente.' })
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor al momento de eliminar un vehículo.' })
  }
}
