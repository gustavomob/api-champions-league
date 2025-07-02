import { Request, Response} from 'express'
import statuscode from 'http-status-codes'
import { getPlayerService } from '../services'

export const getPlayer = async (req: Request, res:Response)=>{
  const data = await getPlayerService()
  res.status(statuscode.OK).json(data)
}