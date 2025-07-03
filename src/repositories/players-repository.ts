import { PlayerModel } from "../models/players-model"

const database: PlayerModel[] = [  
  {
    "id": 1,
    "name": "Kylian Mbappé",
    "club": "Paris Saint-Germain",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 97,
      "Shooting": 89,
      "Passing": 80,
      "Dribbling": 92,
      "Defending": 36,
      "Physical": 76
    }
  },
  {
    "id": 2,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "Midfielder",
    "statistics": {
      "Overall": 91,
      "Pace": 76,
      "Shooting": 86,
      "Passing": 93,
      "Dribbling": 88,
      "Defending": 64,
      "Physical": 78
    }
  },
  {
    "id": 3,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Netherlands",
    "position": "Defender",
    "statistics": {
      "Overall": 89,
      "Pace": 78,
      "Shooting": 60,
      "Passing": 71,
      "Dribbling": 72,
      "Defending": 91,
      "Physical": 86
    }
  },
  {
    "id": 4,
    "name": "Thibaut Courtois",
    "club": "Real Madrid",
    "nationality": "Belgium",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 90,
      "Pace": 50,
      "Shooting": 40,
      "Passing": 60,
      "Dribbling": 45,
      "Defending": 15,
      "Physical": 70
    }
  },
  {
    "id": 5,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nationality": "England",
    "position": "Midfielder",
    "statistics": {
      "Overall": 86,
      "Pace": 79,
      "Shooting": 80,
      "Passing": 82,
      "Dribbling": 85,
      "Defending": 78,
      "Physical": 84
    }
  }
]

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