import "./App.css";
import Game from "./pages/Game";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store";
import mapStateToProps from "./redux/mapStateToProps";
import { useState } from "react";
import { initialStateType } from "./redux/types";
import { generatePlayer } from "./redux/logic/generatePlayer";
import { CreatePlayer } from "./pages/CreatePlayer";

const GameContainer = connect(mapStateToProps)(Game);
const CreatePlayerContainer = connect(mapStateToProps)(Game);

const App = () => {
  const [validPlayer, setValidPlayer] = useState(false);

  const handleSetValidPlayer = (valid: boolean) => {
    setValidPlayer(valid);
  };

  return (
    <Provider store={store}>
      <div className="void-app">
        {validPlayer ? (
          <GameContainer />
        ) : (
          <CreatePlayer setValidPlayer={handleSetValidPlayer} />
        )}
      </div>
    </Provider>
  );
};

export default App;
