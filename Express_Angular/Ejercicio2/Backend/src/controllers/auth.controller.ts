import { Request, Response } from 'express'

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
  } catch (error: any) {
    res.status(4009).send({ error: error.message })
  }
}

const login = async (req: Request, res: Response) => {}

export default { register }
