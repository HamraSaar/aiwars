import dotenv from 'dotenv'
dotenv.config()

export const configurations = {
	port: process.env.PORT,
	HtApiToken: process.env.HF_API_TOKEN,
}
