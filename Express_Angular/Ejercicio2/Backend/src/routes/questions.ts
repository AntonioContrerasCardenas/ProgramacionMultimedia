import express from 'express'
import {
  getQuestionByCategory,
  getQuestionsByCategory,
  getRandomQuestion,
} from '../controllers/question.controller'

const router = express.Router()

// Para llamar a este endpoint usar una peticion get con una url como esta: http://localhost:3000/api/questions/random?limit=3
router.get('/random', getRandomQuestion)
//Para llamar a este endpoint usar una peticion get con una url como esta: http:localhost:3000/api/questions/category?category=science
router.get('/category', getQuestionByCategory)
router.get('/category/paginated', getQuestionsByCategory)

export default router
