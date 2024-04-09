import app from './app.js'
import envConfig from './config/env.config.js'

app.listen(envConfig.appPort, () => {
  console.log(`Server is running in port ${envConfig.appPort}`)
})
