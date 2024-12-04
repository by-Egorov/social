import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRouter from './routes/authRouter.js'

const server = express()
const PORT = process.env.PORT

server.get('/', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

server.use(cors())
server.use(express.json())

server.use('/api', authRouter)
mongoose
.connect(
	process.env.ATLAS_URI
)
.then(() => console.log('DB ok'))
.catch(() => console.log('DB error'))

server.listen(PORT, () => console.log(`Сервер работает, порт = ${PORT}`))