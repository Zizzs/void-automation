import { initialStateType, Star, Planet, Miner } from "../types";
import { buildings } from "../../data/buildings";

export const generatePlayer = (state: initialStateType) => {
  const stars = generateStars();
  state.stars = stars;

  return state;
};

const generateStars = () => {
  let totalStars = 3; // TODO: Create Total Stars Generation Script
  let newStars: Star[] = [];

  for (let i = 0; i < totalStars; i++) {
    let starName: string = `Star${i}`; // TODO: Create Star Name Generation Script
    let starType: string = "K"; // TODO: Create Star Type Generation Script
    let starLight: number = 1000; // TODO: Create Star Light Generation Script
    let starIndex = i;
    let starPlanets: Planet[] = generatePlanets(starType, starIndex);

    let star = {
      name: starName,
      type: starType,
      totalLight: starLight,
      planets: starPlanets,
    };

    newStars.push(star);
  }

  return newStars;
};

const generatePlanets = (starType: string, starIndex: number) => {
  let totalPlanets = 3; // TODO: Create Total Planets Generation Script
  let newPlanets: Planet[] = [];

  for (let i = 0; i < totalPlanets; i++) {
    let planetName: string = `Planet${i}`; // TODO: Create Planet Name Generation Script
    let planetMiner: Miner = buildings.miner.default;

    if (i === 0 && starIndex === 0) {
      planetMiner = buildings.miner.one;
    }

    const newPlanet = {
      name: planetName,
      miner: planetMiner,
    };

    newPlanets.push(newPlanet);
  }

  return newPlanets;
};
