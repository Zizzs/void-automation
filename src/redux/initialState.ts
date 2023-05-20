import { initialStateType } from "./types";

const initialState: initialStateType = {
  name: "Default",
  resources: {
    metal: 0,
    diamond: 0,
    stone: 0,
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
