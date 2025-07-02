import statuscode from 'http-status-codes'
import { findAllPlayers } from '../repositories/players-repository'

export const getPlayerService = async () => {
  const data = await findAllPlayers()

  return {
    status: data ? statuscode.OK : statuscode.NO_CONTENT,
    data: data ?? null
  }
}