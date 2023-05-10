import { initialStateType } from "../types";

export const updateResources = (state: initialStateType) => {
  let newState = JSON.parse(JSON.stringify(state));

  newState.resources.one += state.resourcesIncome.one;
  newState.resources.two += state.resourcesIncome.two;
  newState.resources.three += state.resourcesIncome.three;

  return newState;
};
