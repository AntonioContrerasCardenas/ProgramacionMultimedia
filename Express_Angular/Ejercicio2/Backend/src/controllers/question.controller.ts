import { Response, Request } from 'express'
import QuestionsService from '../services/questions.service'

export const getRandomQuestion = (req: Request, res: Response) => {
  const limit = +req.body.limit
  console.log(limit)
  if (limit) {
    console.log(limit)
    const question = QuestionsService.getRandomsQuestion(limit)
    res.status(200).send(question)
    return
  }
  const question = QuestionsService.getRandomQuestion()
  res.status(200).send(question)
}

export const getRandomsQuestion = (req: Request, res: Response) => {
  const limit = +req.body.limit
  const question = QuestionsService.getRandomsQuestion(limit)

  if (!question) {
    res.status(404).send('Not found')
    return
  }

  res.status(200).send(question)
}

export const getQuestionByCategory = (req: Request, res: Response) => {
  const category = req.body.category
  const limit = +req.body?.limit

  if (limit) {
    const question = QuestionsService.getQuestionsByCategory(category, limit)
    if (!question) {
      res.status(404).send('Not found')
      return
    }
    res.status(200).send(question)
    return
  }

  const question = QuestionsService.getQuestionByCategory(category)
  if (!question) {
    res.status(404).send('Not found')
    return
  }
  res.status(200).send(question)
}

export const getQuestionsByCategory = (req: Request, res: Response) => {
  //   const category = req.params.category
  //   const limit = +req.params.limit

  const { category, limit } = req.body

  const question = QuestionsService.getQuestionsByCategory(category, +limit)
  if (!question) {
    res.status(404).send('Not found')
    return
  }
  res.status(200).send(question)
}
