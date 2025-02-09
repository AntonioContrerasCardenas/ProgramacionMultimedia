import { Document } from 'mongoose'

// Extiende la interfaz Request de Express
declare module 'express' {
  interface Request {
    user?: Document // O el tipo específico de tu modelo de usuario
    token?: string
  }
}
