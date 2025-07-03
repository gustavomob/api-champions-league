import statuscode from 'http-status-codes'
import { addPlayer, findAllPlayers, findPlayById } from '../repositories/players-repository'
import { PlayerModel } from '../models/players-model'

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
    data: data ?? null
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
