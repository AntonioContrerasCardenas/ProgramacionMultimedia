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

const loginS = async (email: string, password: string) => {}

export { registerS, loginS }
