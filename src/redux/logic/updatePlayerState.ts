import { initialStateType } from "../types";

export const updatePlayerState = (state: initialStateType) => {
  let newPlayerState = JSON.parse(JSON.stringify(state));

  // Calculate resource totals from miners and update the planet's total resource count
  for (let i = 0; i < state.stars?.length; i++) {
    let currentStar = state?.stars[i];
    for (let j = 0; j < currentStar?.planets.length; j++) {
      let currentPlanet = currentStar?.planets[j];

      for (let miner of currentPlanet.miners) {
        // Add resource income for the tick
        newPlayerState.resources.metal += miner.rate;
        newPlayerState.resources.diamond += miner.rate;
        newPlayerState.resources.stone += miner.rate;

        // Calculate planet resource total from miner consumption
        newPlayerState.stars[i].planets[j].metal -= miner.rate;
        newPlayerState.stars[i].planets[j].diamond -= miner.rate;
        newPlayerState.stars[i].planets[j].stone -= miner.rate;
      }
    }
  }

  // Calculate Constructor Cost and Production

  return newPlayerState;
};
