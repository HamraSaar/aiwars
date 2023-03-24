import express, { Request, Response } from 'express'
import {
	ConversationalRequestBody,
	QuestionRequestBody,
	TextRequestBody,
	TypedRequestBody,
} from '../../types/ApiTypes'
import { configurations } from '../configurations'
import ToxicBitchService from '../services/toxicBitchService'
const api = express.Router()

const toxicBitchService = new ToxicBitchService()

api.get('/health', async (req: Request, res: Response) => {
	console.log('health check')
	await toxicBitchService.run()
	res.send('api up and running biatch!')
})

export default api
