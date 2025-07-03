import { ClubModel } from "../models/clubs-model";
import { readDbClubs, writeDbClubs} from "../utils/hellpers";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return await readDbClubs();
};

export const addClub = async (club: ClubModel): Promise<ClubModel> => {
  const database = await readDbClubs();
  const newId = database.length > 0 ? database[database.length - 1].id + 1 : 1;
  const newClub: ClubModel = { ...club, id: newId };
  database.push(newClub);
  await writeDbClubs(database);
  return newClub;
};
