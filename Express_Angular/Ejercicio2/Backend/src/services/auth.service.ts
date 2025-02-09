import { User } from '../models/Users'

const registerS = async (name: string, email: string, password: string) => {
  const existUser = await User.findOne({ email })
  if (existUser) {
    throw new Error('User already exists')
  }
  const user = new User({ name, email, password })
  await user.save()
  return user.toObject()
}

const loginS = async (email: string, password: string) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordValid = await user.comparePassword(password)
  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  const token = await user.generateAuthToken()
  console.log({ token })
  return { user: user.toObject(), token }
}

export { registerS, loginS }
