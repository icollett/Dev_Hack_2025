import express, { Request, Response } from 'express'
import chatbot from "./api/v1/routes/chatbotRoutes"
const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
	res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
	res.send('pong 🏓')
})

app.use('/api/v1/chatbot', chatbot);

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`)
})
