import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";

import { useAppDispatch } from "../../hooks/redux";
import { store } from "../../redux/store";

import "./styles.scss";

const Game = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(1000);
  const [pulse, setPulse] = useState(0);
  const [pause, setPause] = useState(false);

  const dispatch = useAppDispatch();
  const playerState = store.getState();

  useEffect(() => {
    const gameLoop = setInterval(() => {
      // Game Logic -----------

      dispatch({ type: "player/incByAmount", payload: 5 });

      // Retrieve Player's Current Resource Income
      // Calculate New Resource Totals

      console.log(playerState.one);
    }, gameSpeed);

    return () => clearInterval(gameLoop);
  });

  const handleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <div className="void-game-wrapper">
      <div className="void-game-container">
        <div className="w-[10rem]">
          <Dropdown
            onClick={handleDropDown}
            isOpen={dropDownOpen}
            header="Dropdown"
          >
            <p style={{ color: "white" }}>test1</p>
            <p style={{ color: "white" }}>test2</p>
            <p style={{ color: "white" }}>test3</p>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Game;
