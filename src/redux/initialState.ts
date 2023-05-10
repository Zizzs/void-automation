import { initialStateType } from "./types";

const initialState: initialStateType = {
  resources: {
    one: 0,
    two: 0,
    three: 0,
  },
  resourcesIncome: {
    one: 1,
    two: 1,
    three: 1,
  },
  buildings: {
    miners: [],
    constructors: [],
  },
  logistics: {
    drones: [],
    ships: [],
  },
};

export default initialState;
