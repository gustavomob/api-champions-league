import { Request, Response } from 'express'
import { getPlayerByIdService, getPlayerService } from '../services/players-service'

export const getPlayer = async (req: Request, res: Response) => {
  const result = await getPlayerService()
  res.status(result.status).json(result.data)
}

export const getPlayerById = async (req: Request, res: Response) => {
 const id = parseInt(req.params.id)
 const httpResponse = await getPlayerByIdService(id)
 res.status(httpResponse.status).json(httpResponse.data)
}