import { initialStateType } from "../types";

export const updatePlayerState = (state: initialStateType) => {
  let newPlayerState = JSON.parse(JSON.stringify(state));

  // Calculate resource totals from miners and update the planet's total resource count
  for (let i = 0; i < state.stars?.length; i++) {
    let currentStar = state?.stars[i];
    for (let j = 0; j < currentStar?.planets.length; j++) {
      let currentPlanet = currentStar?.planets[j];

      // Add resource income for the tick
      newPlayerState.resources.metal += currentPlanet.miner.metalRate;
      newPlayerState.resources.diamond += currentPlanet.miner.diamondRate;
      newPlayerState.resources.stone += currentPlanet.miner.stoneRate;

      // Calculate planet resource total from miner consumption
      newPlayerState.stars[i].planets[j].metal -= currentPlanet.miner.metalRate;
      newPlayerState.stars[i].planets[j].diamond -=
        currentPlanet.miner.diamondRate;
      newPlayerState.stars[i].planets[j].stone -= currentPlanet.miner.stoneRate;
    }
  }

  // Calculate Constructor Cost and Production

  return newPlayerState;
};
