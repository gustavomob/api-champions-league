import path from "path";
import fs from "fs/promises";
import { ClubModel } from "../models/clubs-model";
import { PlayerModel } from "../models/players-model";

const players = path.join(__dirname, "..", "repositories", "db", "players.json");
const clubs = path.join(__dirname, "..", "repositories", "db", "clubs.json");

export const readDbPlayers = async (): Promise<PlayerModel[]> => {
  const data = await fs.readFile(players, "utf-8");
  return JSON.parse(data);
};

export const writeDbPlayers = async (data: PlayerModel[]): Promise<void> => {
  await fs.writeFile(players, JSON.stringify(data, null, 2));
};

export const readDbClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile(clubs, "utf-8");
  return JSON.parse(data);
};

export const writeDbClubs = async (data: ClubModel[]): Promise<void> => {
  await fs.writeFile(clubs, JSON.stringify(data, null, 2));
};
