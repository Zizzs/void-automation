import Input from "../../components/Input";
import { useState } from "react";
import { store } from "../../redux/store";
import { generatePlayer } from "../../redux/logic/generatePlayer";
import { useAppDispatch } from "../../hooks/redux";
import { NewsTicker } from "../../components/NewsTicker";

type CreatePlayerProps = {
  setValidPlayer: (isPlayerValid: boolean) => void;
};

export const Home = ({ setValidPlayer }: CreatePlayerProps) => {
  // TODO: Import/Export User Data instead of creating player
  const [playerName, setPlayerName] = useState("");
  const dispatch = useAppDispatch();

  const handlePlayerName = (name: string) => {
    setPlayerName(name);
  };

  const handlePlayerState = () => {
    let playerState = JSON.parse(JSON.stringify(store.getState()));

    playerState.name = playerName;

    playerState = generatePlayer(playerState);

    dispatch({ type: "player/createPlayer", payload: playerState });

    // Validate the player and check for proper date typings
    const isPlayerValid = true;
    setValidPlayer(isPlayerValid);

    console.log(isPlayerValid);
  };

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

        <div className="flex-1 ">
          <p className="text-white text-3xl mb-5">CreatePlayer</p>
          <Input
            className="mb-5"
            onChange={handlePlayerName}
            value={playerName}
          />
          <button className="bg-white mb-5" onClick={handlePlayerState}>
            Submit
          </button>
          <p className="text-white text-3xl mb-5">Or Upload Character Data</p>
        </div>
      </div>
    </div>
  );
};
