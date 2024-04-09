import { createPool } from 'mysql2'
import envConfig from './env.config.js'

const pool = createPool({
  host: envConfig.dbHost,
  database: envConfig.dbName,
  user: envConfig.dbUser,
  password: envConfig.dbPassword,
  port: envConfig.dbPort,
})

export default pool
