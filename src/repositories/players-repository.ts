import { PlayerModel } from "../models/players-model";
import { StaticsModel } from "../models/statics-model";
import { database } from "./db";

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const addPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
  const newId = database.length > 0 ? database[database.length - 1].id + 1 : 1;
  const newPlayer: PlayerModel = { ...player, id: newId };
  database.push(newPlayer);
  return newPlayer;
};

export const updatePlayerById = async (id: number, statistics: StaticsModel): Promise<PlayerModel | undefined> => {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
    return database[playerIndex];
  }
  return undefined;
};

export const deletePlayerById = async (id: number): Promise<boolean> => {
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
};
