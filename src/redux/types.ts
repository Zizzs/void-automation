export type initialStateType = {
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
    miners: Miner[];
    constructors: Constructor[];
  };
  logistics: {
    drones: Drone[];
    ships: Ship[];
  };
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
