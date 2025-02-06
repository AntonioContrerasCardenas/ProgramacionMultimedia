import { HydratedDocument, model, Schema } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

export interface IUser {
  name: string
  email: string
  password: string
  tokens: { token: string }[]
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

UsersSchema.pre('save', async function (next) {
  const user = this as HydratedDocument<IUser>

  if (user.isModified('password')) {
    const saltRounds = 10
    const hash = await bcrypt.hash(user.password, saltRounds)
    user.password = hash
  }

  next()
})

export const User = model<IUser>('User', UsersSchema)
