import { initialStateType } from "./types";

const initialState: initialStateType = {
  resources: {
    one: 0,
    two: 0,
    three: 0,
  },
  buildings: {
    miners: [],
    constructors: [],
  },
};

export default initialState;
