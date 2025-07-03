import { Request, Response } from 'express'
import { 
  getPlayerByIdService, 
  getPlayerService, 
  postPlayerService,
  deletePlayerService,
} from '../services/players-service'

export const getPlayerController = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService()
  res.status(httpResponse.status).json(httpResponse.data)
}

export const getPlayerByIdController = async (req: Request, res: Response) => {
 const id = parseInt(req.params.id)
 const httpResponse = await getPlayerByIdService(id)
 res.status(httpResponse.status).json(httpResponse.data)
}

export const postPlayerController = async (req: Request, res: Response) => {
  const bodyValue = req.body
  const httpResponse = await postPlayerService(bodyValue);
  if(httpResponse){
    res.status(httpResponse.status).json(httpResponse.data)
  }
}

export const deletePlayerController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await deletePlayerService(id);
  res.status(httpResponse.status).json(httpResponse.data)
}
