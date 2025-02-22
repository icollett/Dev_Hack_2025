import express, { Request, Response } from 'express'
import chatbot from "./api/v1/routes/chatbotRoutes"
import games from "./api/v1/routes/gamesRoutes"

const app = express();
app.use(express.json());
const port = process.env.PORT || 8080

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.use('/api/v1/games', games);
app.use('/api/v1/chatbot', chatbot);

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`)
})
