export type initialStateType = {
  name: string;
  resources: {
    metal: number;
    diamond: number;
    stone: number;
  };
  buildings: {
    constructors: Constructor[];
  };
  logistics: {
    drones: Drone[];
    ships: Ship[];
  };
  stars: Star[];
};

export type Miner = {
  name: string;
  tier: string;
  metalRate: number;
  diamondRate: number;
  stoneRate: number;
};

export type Constructor = {
  name: string;
  tier: string;
  rate: number;
  maxInput: number;
};

export type Drone = {
  name: string;
  tier: string;
  rate: number;
};

export type Ship = {
  name: string;
  tier: string;
  rate: number;
};

export type Star = {
  name: string;
  type: string;
  totalLight: number;
  planets: Planet[];
};

export type Planet = {
  name: string;
  miner: Miner;
};
