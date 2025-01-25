import { Document, model, Schema } from 'mongoose'

export interface CategoryI extends Document {
  name: string
}

const CategorySchema = new Schema<CategoryI>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

export const Category = model<CategoryI>('Category', CategorySchema)
