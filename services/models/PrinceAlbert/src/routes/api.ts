import express, { Request, Response } from 'express'
import {
	ConversationalRequestBody,
	QuestionRequestBody,
	TextRequestBody,
	TypedRequestBody,
} from '../../types/ApiTypes'
import { configurations } from '../configurations'
import PrinceAlbertService from '../services/princeAlbertService'
const api = express.Router()

const princeAlbertService = new PrinceAlbertService(configurations.HtApiToken)

api.get('/health', (req: Request, res: Response) => {
	console.log('health check')
	res.send('api up and running biatch!')
})

api.post(
	'/question',
	async (req: TypedRequestBody<QuestionRequestBody>, res: Response) => {
		console.log('question', req.body)

		const answer = await princeAlbertService.questionAnswer(
			req.body.question,
			req.body.context
		)

		res.status(200).json({ answer })
	}
)

api.post(
	'/converstaion',
	async (req: TypedRequestBody<ConversationalRequestBody>, res: Response) => {
		const answer = await princeAlbertService.conversational(
			req.body.pastUserInputs,
			req.body.pastGeneratedResponses,
			req.body.text
		)

		res.status(200).json({ answer })
	}
)

api.post(
	'/text',
	async (req: TypedRequestBody<TextRequestBody>, res: Response) => {
		const answer = await princeAlbertService.textGeneration(req.body.text)

		res.status(200).json({ answer })
	}
)

export default api
