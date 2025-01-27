import { Response, Request } from 'express'
import {
  fetchQuestionByCategory,
  fetchQuestionsByCategory,
  fetchQuestionsByCategoryWithPagination,
  fetchRandomQuestion,
  fetchRandomQuestions,
} from '../services/questions.service'
import { Question } from '../models/Question'

export const getRandomQuestions = async (req: Request, res: Response) => {
  try {
    const { limit } = req.query

    const numericLimit = parseInt(limit as string)

    if (!numericLimit) {
      const question = await fetchRandomQuestion()
      res.status(200).send({ questions: [question] })
      return
    }

    const question = await fetchRandomQuestions(+numericLimit)
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

export const getQuestionsByCategory = async (req: Request, res: Response) => {
  try {
    const { category, limit } = req.query

    const categoryString = category as string
    const limitString = limit as string

    if (!limitString) {
      const question = await fetchQuestionByCategory(categoryString)
      if (!question) {
        res.status(404).send('Not found')
        return
      }
      res.status(200).send({ questions: [question] })
      return
    }

    const question = await fetchQuestionsByCategory(
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

export const getQuestionsByCategoryPaginated = async (
  req: Request,
  res: Response
) => {
  try {
    const { category, page = 1, limit = 6 } = req.query

    const categoryString = category as string
    const numericPage = Number(page)
    const numericLimit = Number(limit)

    if (!categoryString) {
      res.status(404).send({ error: 'Category not found' })
      return
    }

    const { questions, totalPages } =
      await fetchQuestionsByCategoryWithPagination(
        categoryString,
        numericPage,
        numericLimit
      )

    if (!questions || questions.length === 0) {
      res.status(200).send({ error: 'No have questions' })
      return
    }

    res.status(200).send({ questions, totalPages })
    return
  } catch (error: any) {
    res.status(404).send({ error: error.message })
    return
  }
}
