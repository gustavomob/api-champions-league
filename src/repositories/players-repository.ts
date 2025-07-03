import { PlayerModel } from "../models/players-model";
import { StaticsModel } from "../models/statics-model";
import {readDbPlayers, writeDbPlayers} from "../utils/hellpers";

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return await readDbPlayers();
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const database = await readDbPlayers();
  return database.find((player) => player.id === id);
};

export const addPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
  const database = await readDbPlayers();
  const newId = database.length > 0 ? database[database.length - 1].id + 1 : 1;
  const newPlayer: PlayerModel = { ...player, id: newId };
  database.push(newPlayer);
  await writeDbPlayers(database);
  return newPlayer;
};

export const updatePlayerById = async (id: number, statistics: StaticsModel): Promise<PlayerModel | undefined> => {
  const database = await readDbPlayers();
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
    await writeDbPlayers(database);
    return database[playerIndex];
  }
  return undefined;
};

export const deletePlayerById = async (id: number): Promise<boolean> => {
  const database = await readDbPlayers();
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    await writeDbPlayers(database);
    return true;
  }
  return false;
};
