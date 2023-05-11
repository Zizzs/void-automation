export type initialStateType = {
  name: string;
  resources: {
    one: number;
    two: number;
    three: number;
  };
  resourcesIncome: {
    one: number;
    two: number;
    three: number;
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
  rate: number;
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
  resourceOne: number;
  resourceTwo: number;
  resourceThree: number;
  miners: Miner[];
};
