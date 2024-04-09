import { Router } from 'express'

const router = Router()

router.get('/test', (_, res) => res.status(200).json("It's a pleasure that someone sees this"))

export { router }
