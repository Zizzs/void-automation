import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";

import { useAppDispatch } from "../../hooks/redux";
import { store } from "../../redux/store";

import "./styles.scss";
import { VoidHub } from "../VoidHub";
import { ResourceHeader } from "../../components/ResourceHeader";

const Game = () => {
  const [gameSpeed, setGameSpeed] = useState(1000);

  const dispatch = useAppDispatch();
  const playerState = store.getState();

  useEffect(() => {
    const gameLoop = setInterval(() => {
      // Run the Update Player State dispatch function
      dispatch({ type: "player/updatePlayerState", payload: playerState });
    }, gameSpeed);

    return () => clearInterval(gameLoop);
  }, [playerState]);

  return (
    <div className="void-game-wrapper">
      <ResourceHeader resources={playerState.resources} />
      <VoidHub />
    </div>
  );
};

export default Game;
