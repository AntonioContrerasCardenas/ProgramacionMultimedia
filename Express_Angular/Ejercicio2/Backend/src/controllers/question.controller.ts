import { Response, Request } from 'express'
import {
  SgetQuestionByCategory,
  SgetQuestionsByCategory,
  SgetRandomQuestion,
  SgetRandomsQuestion,
} from '../services/questions.service'

export const getRandomQuestion = async (req: Request, res: Response) => {
  try {
    const { limit } = req.query

    const numericLimit = parseInt(limit as string)

    if (!numericLimit) {
      const question = await SgetRandomQuestion()
      res.status(200).send({ questions: [question] })
      return
    }

    const question = await SgetRandomsQuestion(+numericLimit)
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

export const getQuestionByCategory = async (req: Request, res: Response) => {
  try {
    const { category, limit } = req.query

    const categoryString = category as string
    const limitString = limit as string
    console.log(categoryString)

    if (!limitString) {
      const question = await SgetQuestionByCategory(categoryString)
      if (!question) {
        res.status(404).send('Not found')
        return
      }
      res.status(200).send({ questions: [question] })
      return
    }

    const question = await SgetQuestionsByCategory(categoryString, +limitString)
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
