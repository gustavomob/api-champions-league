import { Request, Response } from 'express';
import { 
  getPlayerByIdService, 
  getPlayerService, 
  postPlayerService,
  deletePlayerService,
  updatePlayerService,
} from '../services/players-service';
import { StaticsModel } from '../models/statics-model';
import statuscode from 'http-status-codes';

export const getPlayerController = async (req: Request, res: Response) => {
  try {
    const httpResponse = await getPlayerService();
    res.status(httpResponse.status).json(httpResponse.data);
  } catch (error) {
    res.status(statuscode.INTERNAL_SERVER_ERROR).json({ message: "Erro interno ao buscar jogadores." });
  }
};

export const getPlayerByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.status).json(httpResponse.data);
  } catch (error) {
    res.status(statuscode.INTERNAL_SERVER_ERROR).json({ message: "Erro interno ao buscar jogador por ID." });
  }
};

export const postPlayerController = async (req: Request, res: Response) => {
  try {
    const bodyValue = req.body;
    const httpResponse = await postPlayerService(bodyValue);
    res.status(httpResponse.status).json(httpResponse.data);
  } catch (error) {
    res.status(statuscode.INTERNAL_SERVER_ERROR).json({ message: "Erro interno ao cadastrar jogador." });
  }
};

export const deletePlayerController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerService(id);
    res.status(httpResponse.status).json(httpResponse.data);
  } catch (error) {
    res.status(statuscode.INTERNAL_SERVER_ERROR).json({ message: "Erro interno ao deletar jogador." });
  }
};

export const updatePlayerController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const bodyValue: StaticsModel = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue);
    res.status(httpResponse.status).json(httpResponse.data);
  } catch (error) {
    res.status(statuscode.INTERNAL_SERVER_ERROR).json({ message: "Erro interno ao atualizar estatísticas do jogador." });
  }
};
