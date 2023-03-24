// Express extensions
export interface TypedRequestBody<T> extends Express.Request {
	body: T
}

// Request types
export interface QuestionRequestBody {
	question: string
	context: string
}

export interface ConversationalRequestBody {
	pastUserInputs: string[]
	pastGeneratedResponses: string[]
	text: string
}

export interface TextRequestBody {
	text: string
}
