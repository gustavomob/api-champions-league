import statuscode from 'http-status-codes'
import { findAllPlayers, findPlayById } from '../repositories/players-repository'

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
    status: data ? statuscode.OK : statuscode.NO_CONTENT,
    data: data ?? null
  }
}