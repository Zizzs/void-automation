import Dropdown from "../../components/Dropdown";
import { useEffect, useState, useRef } from "react";

import { useAppDispatch } from "../../hooks/redux";
import { store } from "../../redux/store";

import "./styles.scss";
import { VoidHub } from "../VoidHub";
import { ResourceHeader } from "../../components/ResourceHeader";

const Game = () => {
  const [gameSpeed, setGameSpeed] = useState(1000);
  const dispatch = useAppDispatch();
  const playerState = store.getState();
  const prevResources = useRef(playerState.resources);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      // Run the Update Player State dispatch function
      dispatch({ type: "player/updatePlayerState", payload: playerState });
      prevResources.current = playerState.resources;
    }, gameSpeed);

    return () => clearInterval(gameLoop);
  }, [playerState]);

  return (
    <div className="void-game-wrapper">
      <ResourceHeader
        resources={playerState.resources}
        prevResources={prevResources.current}
      />
      <VoidHub />
    </div>
  );
};

export default Game;
