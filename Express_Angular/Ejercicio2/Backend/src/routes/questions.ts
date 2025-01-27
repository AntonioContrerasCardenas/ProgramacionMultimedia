import express from 'express'
import {
  getQuestionsByCategory,
  getQuestionsByCategoryPaginated,
  getRandomQuestions,
} from '../controllers/question.controller'

const router = express.Router()

// Para llamar a este endpoint usar una peticion get con una url como esta: http://localhost:3000/api/questions/random?limit=3
router.get('/random', getRandomQuestions)
//Para llamar a este endpoint usar una peticion get con una url como esta: http:localhost:3000/api/questions/category?category=science
router.get('/category', getQuestionsByCategory)
router.get('/category/paginated', getQuestionsByCategoryPaginated)

export default router
