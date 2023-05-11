import { initialStateType } from "./types";

const initialState: initialStateType = {
  name: "Default",
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
    constructors: [],
  },
  logistics: {
    drones: [],
    ships: [],
  },
  stars: [],
};

export default initialState;
