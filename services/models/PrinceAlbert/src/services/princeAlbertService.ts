import { HfInference } from '@huggingface/inference'

class PrinceAlbertService {
	hf: HfInference

	constructor(token: string) {
		console.log('princeAlbertService ctor', { token })
		this.hf = new HfInference(token)
	}

	async questionAnswer(question: string, context: string) {
		return await this.hf.questionAnswer({
			model: 'deepset/roberta-base-squad2',
			inputs: {
				question,
				context,
			},
		})
	}

	async conversational(
		pastUserInputs: string[],
		pastGeneratedResponses: string[],
		text: string
	) {
		return await this.hf.conversational({
			model: 'microsoft/DialoGPT-large',
			inputs: {
				past_user_inputs: pastUserInputs,
				generated_responses: pastGeneratedResponses,
				text,
			},
		})
	}

	async textGeneration(text: string) {
		return await this.hf.textGeneration({
			model: 'gpt2',
			inputs: text,
		})
	}
}

export default PrinceAlbertService
