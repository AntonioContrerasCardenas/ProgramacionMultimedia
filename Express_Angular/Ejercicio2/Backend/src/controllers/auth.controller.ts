import { Request, Response } from 'express'
import { loginS, registerS } from '../services/auth.service'

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    const { tokens, _id, ...user } = await registerS(name, email, password)
    res.status(201).send(user)
  } catch (error: any) {
    res.status(400).send({ error: error.message })
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const { user, token } = await loginS(email, password)
    const { password: _, tokens, _id, ...restUser } = user
    res.status(200).send({ user: restUser, token })
  } catch (error: any) {
    res.status(400).send({ error: error.message })
  }
}

export { register, login }
