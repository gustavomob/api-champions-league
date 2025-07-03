import statuscode from 'http-status-codes';
import { ClubModel } from '../models/clubs-model';
import {   
  findAllClubs,   
  addClub,
} from '../repositories/clubs-repository';

export const getClubService = async () => {
  const data = await findAllClubs();
  return {
    status: data.length > 0 ? statuscode.OK : statuscode.NO_CONTENT,
    data: data.length > 0 ? data : null
  };
};

export const postClubService = async (club: ClubModel) => {
  if (!club || Object.keys(club).length === 0) {
    return {
      status: statuscode.BAD_REQUEST,
      data: "Dados do Club são obrigatórios"
    };
  }
  const data = await addClub(club);
  return {
    status: statuscode.CREATED,
    data
  };
};


