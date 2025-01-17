import express from 'express'
import questions from './routes/questions'
import cors from 'cors'

process.loadEnvFile()

export const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/questions', questions)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
