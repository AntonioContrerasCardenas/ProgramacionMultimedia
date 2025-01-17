import express from 'express'
import {
  getQuestionByCategory,
  getRandomQuestion,
} from '../controllers/question.controller'

const router = express.Router()

router.get('/random', getRandomQuestion)
router.get('/category', getQuestionByCategory)

export default router
