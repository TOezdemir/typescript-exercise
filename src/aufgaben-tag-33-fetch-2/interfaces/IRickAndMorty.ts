export interface IRickAndMorty {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin[];
  location: ILocation[];
  image: string;
  episode: IEpisode[];
  url: string;
  created: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IEpisode {}
