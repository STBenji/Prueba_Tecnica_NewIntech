import express from 'express'
import * as router from './routes/router.js'

const app = express()
app.use(express.json())

const appRoutes = Object.values(router)

const API = '/api'

app.use(API, appRoutes)

export default app
