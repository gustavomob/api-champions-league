import statuscode from 'http-status-codes';
import { PlayerModel } from '../models/players-model';
import { StaticsModel } from '../models/statics-model';
import { 
  addPlayer, 
  findAllPlayers, 
  findPlayerById, 
  updatePlayerById, 
  deletePlayerById 
} from '../repositories/players-repository';

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  return {
    status: data.length > 0 ? statuscode.OK : statuscode.NO_CONTENT,
    data: data.length > 0 ? data : null
  };
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  return {
    status: data ? statuscode.OK : statuscode.NOT_FOUND,
    data: data ?? "Player não encontrado"
  };
};

export const postPlayerService = async (player: PlayerModel) => {
  if (!player || Object.keys(player).length === 0) {
    return {
      status: statuscode.BAD_REQUEST,
      data: "Dados do jogador são obrigatórios"
    };
  }
  const data = await addPlayer(player);
  return {
    status: statuscode.CREATED,
    data
  };
};

export const deletePlayerService = async (id: number) => {
  const deleted = await deletePlayerById(id);
  return {
    status: deleted ? statuscode.OK : statuscode.NOT_FOUND,
    data: deleted 
      ? { message: "Player deletado com sucesso" } 
      : { message: "Player não encontrado" }
  };
};

export const updatePlayerService = async (id: number, statistics: StaticsModel) => {
  const updatedPlayer = await updatePlayerById(id, statistics);
  return {
    status: updatedPlayer ? statuscode.OK : statuscode.NOT_FOUND,
    data: updatedPlayer ?? { message: "Player não encontrado para atualização" }
  };
};
