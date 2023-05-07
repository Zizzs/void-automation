export type initialStateType = {
  resources: {
    one: number;
    two: number;
    three: number;
  };
  buildings: {
    miners: Miner[];
    constructors: Constructor[];
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
