import Input from "../../components/Input";
import { useState } from "react";
import { store } from "../../redux/store";
import { generatePlayer } from "../../redux/logic/generatePlayer";
import { useAppDispatch } from "../../hooks/redux";

type CreatePlayerProps = {
  setValidPlayer: (isPlayerValid: boolean) => void;
};

export const CreatePlayer = ({ setValidPlayer }: CreatePlayerProps) => {
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
    <div>
      <div className="pt-10 md:pt-20">
        <p className="text-white">CreatePlayer</p>
        <Input onChange={handlePlayerName} value={playerName} />
        <button onClick={handlePlayerState}>Submit</button>
      </div>
    </div>
  );
};
