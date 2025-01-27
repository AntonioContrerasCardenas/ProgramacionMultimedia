import express from 'express'
import questions from './routes/questions'
import cors from 'cors'
import { PORT } from './config/config'
import connectToDatabase from './config/db'
import seedDatabase from './config/seed'
import category from './routes/category'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/questions', questions)
app.use('/api/categories', category)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
  await connectToDatabase()
  // descomentar esta linea en caso de querer crear la base de datos
  //await seedDatabase()
})
