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
      // Game Logic -----------
      // Calculate New Resource Totals
      // dispatch({ type: "player/updateResources", payload: playerState }); -- Old update dispatch
      //
      // Calculate resource income from miners
      // Calculate new resource totals
      // Calculate resource cost for constructors
      // Calculate resulting raw and processed resource totals
      // Set player state with new resources
    }, gameSpeed);

    return () => clearInterval(gameLoop);
  });

  console.log(playerState);

  return (
    <div className="void-game-wrapper">
      <ResourceHeader resources={playerState.resources} />
      <VoidHub />
    </div>
  );
};

export default Game;
