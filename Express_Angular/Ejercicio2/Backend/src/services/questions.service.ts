import { Category } from '../models/Category'
import { Question } from '../models/Question'

export const SgetRandomQuestion = async () => {
  //   const numberQuestions = await Question.countDocuments()
  //   const random = Math.floor(Math.random() * numberQuestions)
  return Question.aggregate([{ $sample: { size: 1 } }])
  //return Question.findOne()
}

export const SgetRandomsQuestion = async (limit: number) => {
  const numberQuestions = await Question.countDocuments()
  if (limit > numberQuestions)
    throw new Error('Limit is greater than the number of questions')

  return Question.aggregate([{ $sample: { size: limit } }])
}

export const SgetQuestionByCategory = async (categoryId: string) => {
  const category = await Category.findOne({ name: categoryId })

  if (!category) throw new Error('Category not found')

  return Question.findOne({ categoryId: category })
}

export const SgetQuestionsByCategory = async (
  categoryId: string,
  limit: number
) => {
  const category = await Category.findOne({ name: categoryId })
  return Question.find({ categoryId: category }).limit(limit)
}
