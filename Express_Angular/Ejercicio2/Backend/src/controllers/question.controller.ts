import { Response, Request } from 'express'
import {
  createQuestionS,
  fetchQuestionByCategory,
  fetchQuestionsByCategory,
  fetchQuestionsByCategoryWithPagination,
  fetchRandomQuestion,
  fetchRandomQuestions,
} from '../services/questions.service'
import { Question } from '../models/Question'
import { pruebaS } from '../services/auth.service'

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
    const { category, page = 1, total = 1, perPage = 2 } = req.query

    const categoryString = category as string
    const numericPage = Number(page)
    const numericTotal = Number(total)
    const numericPerPage = Number(perPage)

    if (!categoryString) {
      res.status(404).send({ error: 'Category not found' })
      return
    }

    const { questions, totalPages } =
      await fetchQuestionsByCategoryWithPagination(
        categoryString,
        numericPage,
        numericTotal,
        numericPerPage
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

export const getQuestionCountByCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params

    const categoryString = category as string

    if (!categoryString) {
      res.status(404).send({ error: 'Category not found' })
      return
    }

    const count = await Question.countDocuments({ categoryId: categoryString })

    res.status(200).send({ count })
    return
  } catch (error: any) {
    res.status(404).send({ error: error.message })
    return
  }
}

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { category, question, answer, options } = req.body

    const categoryIdString = category as string
    const questionString = question as string
    const answerString = answer as string
    const optionsString = options as string[]

    if (!categoryIdString) {
      res.status(404).send({ error: 'Category not send' })
      return
    }

    if (!questionString) {
      res.status(404).send({ error: 'Question not send' })
      return
    }

    if (!answerString) {
      res.status(404).send({ error: 'Answer not send' })
      return
    }

    if (!optionsString) {
      res.status(404).send({ error: 'Options not send' })
      return
    }

    const userId = req.user?._id as string
    if (!userId) {
      res.status(404).send({ error: 'User not send' })
      return
    }
    const questionResponse = await createQuestionS(
      categoryIdString,
      questionString,
      answerString,
      optionsString,
      userId
    )

    res.status(201).send({ question: questionResponse.question })
  } catch (error: any) {
    res.status(404).send({ error: error.message })
  }
}

export const prueba = async (req: Request, res: Response) => {
  const user = req.user

  if (!user) {
    res.status(401).send({ error: 'Unauthorized' })
    return
  }

  try {
    const questionForUser = await pruebaS(user)

    res.status(201).send({ question: questionForUser })
  } catch (error: any) {
    res.status(404).send({ error: error.message })
  }
}
