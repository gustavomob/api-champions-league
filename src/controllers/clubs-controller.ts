import { Request, Response } from 'express';
import statuscode from 'http-status-codes';
import {   
  getClubService,  
  postClubService,
} from '../services/clubs-service';

export const getClubController = async (req: Request, res: Response) => {
  try {
    const httpResponse = await getClubService();
    res.status(httpResponse.status).json(httpResponse.data);
  } catch (error) {
    res.status(statuscode.INTERNAL_SERVER_ERROR).json({ message: "Erro interno ao buscar clubs." });
  }
}

export const postClubController = async (req: Request, res: Response) => {
  try {
    const bodyValue = req.body;
    const httpResponse = await postClubService(bodyValue);
    res.status(httpResponse.status).json(httpResponse.data);
  } catch (error) {
    res.status(statuscode.INTERNAL_SERVER_ERROR).json({ message: "Erro interno ao cadastrar jogador." });
  }
};







