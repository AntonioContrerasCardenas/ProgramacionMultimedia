import express, { Request, Response } from 'express'
import {
  getQuestionByCategory,
  getQuestionsByCategory,
  getRandomQuestion,
  getRandomsQuestion,
} from '../controllers/question.controller'

const router = express.Router()

router.get('/random', getRandomQuestion)
router.get('/categoria/:categoria', getQuestionByCategory)

export default router
