import express, { Express, Request, Response } from 'express'
import api from './routes/api'
import { configurations } from './configurations'

const port = configurations.port
const app: Express = express()

app.use(express.json())
app.use('/api', api)

app.get('/', (req: Request, res: Response) => {
	res.send('Server alive')
})

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
