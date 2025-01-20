import { Response, Request, NextFunction } from 'express'
import QuestionsService from '../services/questions.service'

export const getRandomQuestion = (req: Request, res: Response) => {
  try {
    const { limit } = req.query

    const numericLimit = parseInt(limit as string)

    console.log(numericLimit)
    if (!numericLimit) {
      const question = QuestionsService.getRandomQuestion()
      res.status(200).send({ questions: [question] })
      return
    }

    const question = QuestionsService.getRandomsQuestion(+numericLimit)
    if (!question) {
      res.status(404).send({ error: 'An unexpected error occurred' })
      return
    }
    res.status(200).send({ questions: question })
    return
  } catch (error: any) {
    res.status(404).send({ error: error.message })
    return
  }
}

export const getQuestionByCategory = (req: Request, res: Response) => {
  try {
    const { category, limit } = req.query

    const categoryString = category as string
    const limitString = limit as string
    console.log(categoryString)

    if (!limitString) {
      const question = QuestionsService.getQuestionByCategory(categoryString)
      if (!question) {
        res.status(404).send('Not found')
        return
      }
      res.status(200).send({ questions: [question] })
      return
    }

    const question = QuestionsService.getQuestionsByCategory(
      categoryString,
      +limitString
    )
    if (!question) {
      res.status(404).send('An unexpected error occurred')
      return
    }
    res.status(200).send({ questions: question })
    return
  } catch (error: any) {
    res.status(404).send({ error: error.message })
    return
  }
}
