import { initialStateType, Star, Planet, Miner } from "../types";

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
    let starPlanets: Planet[] = generatePlanets(starType);

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

const generatePlanets = (type: string) => {
  let totalPlanets = 3; // TODO: Create Total Planets Generation Script
  let newPlanets: Planet[] = [];

  for (let i = 0; i < totalPlanets; i++) {
    let planetName: string = `Planet${i}`; // TODO: Create Planet Name Generation Script
    let resourceOne: number = 10000; // TODO: Create Resources Generation Script
    let resourceTwo: number = 10000;
    let resourceThree: number = 10000;
    let planetMiners: Miner[] = [];

    const newPlanet = {
      name: planetName,
      resourceOne: resourceOne,
      resourceTwo: resourceTwo,
      resourceThree: resourceThree,
      miners: planetMiners,
    };

    newPlanets.push(newPlanet);
  }

  return newPlanets;
};
