import statuscode from 'http-status-codes'
import { PlayerModel } from '../models/players-model'
import { 
  addPlayer, 
  findAllPlayers, 
  findPlayById, 
  deletePlayer 
} from '../repositories/players-repository'

export const getPlayerService = async () => {
  const data = await findAllPlayers()
  return {
    status: data ? statuscode.OK : statuscode.NO_CONTENT,
    data: data ?? null
  }
}

export const getPlayerByIdService = async (id:number) => {
  const data = await findPlayById(id)
  return {
    status: data ? statuscode.OK : statuscode.NOT_FOUND,
    data: data ?? "Player não encontrado"
  }
}

export const postPlayerService = async (player: PlayerModel) => {
  if (!player || Object.keys(player).length === 0) {
    return {
      status: statuscode.BAD_REQUEST,
      data: null
    };
  }
  const data = await addPlayer(player);
  return {
    status: statuscode.CREATED,
    data
  }; 
}

export const deletePlayerService = async (id:number) => {
 await deletePlayer(id);
  return {
    status: statuscode.OK,
    data: { message: "Player deleted" }
  }; 
}
