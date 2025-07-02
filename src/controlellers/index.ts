import { Request, Response } from 'express'
import { getPlayerService } from '../services'

export const getPlayer = async (req: Request, res: Response) => {
  const result = await getPlayerService()
  res.status(result.status).json(result.data)
}