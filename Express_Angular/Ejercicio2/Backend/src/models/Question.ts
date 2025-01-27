import { Schema, model, Document, Types } from 'mongoose'

export interface QuestionI extends Document {
  question: string
  answer: string
  options: string[]
  categoryId: Types.ObjectId
}

const QuestionSchema = new Schema<QuestionI>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: { type: [String], required: true },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
})

export const Question = model<QuestionI>('Question', QuestionSchema)
