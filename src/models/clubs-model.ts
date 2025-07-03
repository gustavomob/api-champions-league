export interface ClubModel {
  id: number;
  name: string;
  country: string;
  city: string;
  stadium: string;
  founded: number;
  coach: string;
  championsLeagueTitles: number;
  logoUrl?: string; 
}