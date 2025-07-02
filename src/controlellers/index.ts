import { Request, Response} from 'express'
import statuscode from 'http-status-codes'

export const getPlayer = (req: Request, res:Response)=>{
  res.status(statuscode.OK).json({player: "Beckham"})
}