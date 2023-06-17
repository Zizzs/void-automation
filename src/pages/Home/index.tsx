import Input from "../../components/Input";
import { useEffect, useState } from "react";
import { store } from "../../redux/store";
import { generatePlayer } from "../../redux/logic/generatePlayer";
import { useAppDispatch } from "../../hooks/redux";
import { NewsTicker } from "../../components/NewsTicker";
import { initialStateType } from "../../redux/types";

type CreatePlayerProps = {
  setValidPlayer: (isPlayerValid: boolean) => void;
};

export const Home = ({ setValidPlayer }: CreatePlayerProps) => {
  // TODO: Import/Export User Data instead of creating player
  const [playerName, setPlayerName] = useState("");

  // Valid Player State bool used to determine if the parsed local storage is of a valid player state type
  const [validPlayerState, setValidPlayerState] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const localPlayerData = JSON.parse(
      localStorage.getItem("PlayerData") || ""
    );

    const isValid = checkObject(localPlayerData);

    setValidPlayerState(isValid);
  });

  const handlePlayerName = (name: string) => {
    setPlayerName(name);
  };

  const handleGeneratePlayerState = () => {
    let playerState = JSON.parse(JSON.stringify(store.getState()));

    playerState.name = playerName;

    playerState = generatePlayer(playerState);

    dispatch({ type: "player/createPlayer", payload: playerState });

    // Validate the player and check for proper date typings
    const isPlayerValid = checkObject(playerState);
    setValidPlayer(isPlayerValid);
  };

  const handleLoadPlayerState = () => {
    const localPlayerData = JSON.parse(
      localStorage.getItem("PlayerData") || ""
    );

    let playerState = localPlayerData;

    dispatch({ type: "player/createPlayer", payload: playerState });

    // Validate the player and check for proper date typings
    const isPlayerValid = checkObject(playerState);
    setValidPlayer(isPlayerValid);
  };

  // Function to validate the player object
  function checkObject(obj: any): obj is initialStateType {
    const expectedKeys: Array<keyof initialStateType> = [
      "name",
      "resources",
      "buildings",
      "logistics",
      "stars",
    ];

    if (typeof obj !== "object" || obj === null) {
      return false;
    }

    for (const key of expectedKeys) {
      if (!(key in obj)) {
        return false;
      }
    }

    return true;
  }

  return (
    <div className="w-full h-full">
      <p className="text-white text-5xl w-full text-center pt-10">
        Void Automation
      </p>
      <div className="flex flex-col md:flex-row p-10 border-solid border-[1px] border-white border-radius-[8px] rounded-lg max-h-[80%] mt-10">
        <div className="text-white flex-1 md:h-full">
          <p>News</p>
          <NewsTicker />
        </div>
        {validPlayerState ? (
          <div className="flex-1">
            <button className="bg-white mb-5" onClick={handleLoadPlayerState}>
              Load Player Data
            </button>
          </div>
        ) : (
          <div className="flex-1 ">
            <p className="text-white text-3xl mb-5">CreatePlayer</p>
            <Input
              className="mb-5"
              onChange={handlePlayerName}
              value={playerName}
            />
            <button
              className="bg-white mb-5"
              onClick={handleGeneratePlayerState}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
