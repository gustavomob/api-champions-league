interface PlayerModel{
  id: number;
  name: string;
}

const database: PlayerModel[] = [
  {id:1, name:"Messi"},
  {id:2, name: "Neymar"},
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayById = async (id:number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id)
}