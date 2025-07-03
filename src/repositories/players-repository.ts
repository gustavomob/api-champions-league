import { PlayerModel } from "../models/players-model"
import { database } from "./db"

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayById = async (id:number): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id)
}

export const addPlayer = async (player: PlayerModel): Promise<PlayerModel> => { 
  const newId = database.length > 0 ? database[database.length - 1].id + 1 : 1;
  const newPlayer = { ...player, id: newId };
  database.push(newPlayer);
  return newPlayer;
};

export const deletePlayer = async (id: number) => {   
  const index = database.findIndex(player => player.id === id)
  if (index !== -1){
    database.splice(index,1)
  }
};