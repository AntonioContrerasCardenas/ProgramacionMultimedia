import { Response, Request } from 'express'
import QuestionsService from '../services/questions.service'

export const getRandomQuestion = (req: Request, res: Response) => {
  try {
    const limit = +req.body.limit

    if (!limit) {
      const question = QuestionsService.getRandomQuestion()
      res.status(200).send(question)
    }

    const question = QuestionsService.getRandomsQuestion(limit)
    if (!question) {
      res.status(404).send({ error: 'An unexpected error occurred' })
    }
    res.status(200).send(question)
    return
  } catch (error: any) {
    res.status(404).send({ error: error.message })
  }
}

export const getQuestionByCategory = (req: Request, res: Response) => {
  try {
    const { category, limit } = req.body

    if (!limit) {
      const question = QuestionsService.getQuestionByCategory(category)
      if (!question) {
        res.status(404).send('Not found')
        return
      }
      res.status(200).send(question)
    }

    const question = QuestionsService.getQuestionsByCategory(category, limit)
    if (!question) {
      res.status(404).send('An unexpected error occurred')
      return
    }
    res.status(200).send(question)
    return
  } catch (error: any) {
    res.status(404).send({ error: error.message })
  }
}
