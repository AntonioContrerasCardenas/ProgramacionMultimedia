import { Document } from 'mongoose'

// Extiende la interfaz Request de Express
declare module 'express' {
  interface Request {
    user?: Document
    token?: string
  }
}
