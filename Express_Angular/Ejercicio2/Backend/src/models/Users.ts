import { model, Schema } from 'mongoose'
import validator from 'validator'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  tokens: string[]
}

const UsersSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Please provide a valid email',
    },
  },
  password: {
    type: String,
    required: true,
  },
  tokens: {
    type: [String],
    default: [],
  },
})

export const User = model<IUser>('User', UsersSchema)
