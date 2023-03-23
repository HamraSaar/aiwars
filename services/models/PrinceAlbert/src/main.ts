import { HfInference } from '@huggingface/inference'

const hf = new HfInference('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')

// Natural Language

const naturalLanguage = async () => {
	const conversational = await hf.conversational({
		model: 'microsoft/DialoGPT-large',
		inputs: {
			past_user_inputs: ['Which movie is the best ?'],
			generated_responses: ['It is Die Hard for sure.'],
			text: 'Do you think so too ?',
		},
	})
	// const conversation = conversational.conversation
	console.log({ ...conversational })
	// console.log({ conversation })

	const questionAnswer = await hf.questionAnswer({
		model: 'deepset/roberta-base-squad2',
		inputs: {
			question: 'Why did they marched?',
			context: `The March on Washington for Jobs and Freedom was partly intended to demonstrate mass support for the civil rights legislation proposed by President John F. Kennedy in June. Martin Luther King and other leaders, therefore, agreed to keep their speeches calm, also, to avoid provoking the civil disobedience which had become the hallmark of the Civil Rights Movement. King originally designed his speech as a homage to Abraham Lincoln's Gettysburg Address, timed to correspond with the centennial of the Emancipation Proclamation`,
		},
	})
	console.log({ questionAnswer })

	const textGeneration = await hf.textGeneration({
		model: 'gpt2',
		inputs: 'The answer to the universe is',
	})
	console.log({ textGeneration })
}

naturalLanguage()
