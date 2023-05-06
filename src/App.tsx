import "./App.css";
import Game from "./pages/Game";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store";
import mapStateToProps from "./redux/mapStateToProps";

const Container = connect(mapStateToProps)(Game);

const App = () => {
  return (
    <Provider store={store}>
      <div className="void-app">
        <Container />
      </div>
    </Provider>
  );
};

export default App;
