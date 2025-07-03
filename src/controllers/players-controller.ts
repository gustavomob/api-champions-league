import { Request, Response } from 'express'
import { getPlayerByIdService, getPlayerService, postPlayerService} from '../services/players-service'

export const getPlayer = async (req: Request, res: Response) => {
  const result = await getPlayerService()
  res.status(result.status).json(result.data)
}

export const getPlayerById = async (req: Request, res: Response) => {
 const id = parseInt(req.params.id)
 const httpResponse = await getPlayerByIdService(id)
 res.status(httpResponse.status).json(httpResponse.data)
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body
  const httpResponse = await postPlayerService(bodyValue);
  if(httpResponse){
    res.status(httpResponse.status).json(httpResponse.data)
  }
}