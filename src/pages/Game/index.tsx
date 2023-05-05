import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import { useGamePulse } from "../../hooks/useGamePulse";
import "./styles.scss";

const Game = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [pause, setPause] = useState(false);

  const currentPulse = useGamePulse({ pause });

  console.log(currentPulse);

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
