import { Request, Response } from 'express'
import { 
  getPlayerByIdService, 
  getPlayerService, 
  postPlayerService,
  deletePlayerService,
  updatePlayerService,
} from '../services/players-service'
import { StaticsModel } from '../models/statics-model'

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

export const updatePlayerController = async (req: Request, res:Response) => {
  const id = parseInt(req.params.id)
  const bodyValue: StaticsModel = req.body
  const httpResponse = await updatePlayerService(id, bodyValue);
  res.status(httpResponse.status).json(httpResponse.data)
}
