import "./App.css";
import Spinner from "./spinner";
import Bouncer from "./bouncer";

function App() {
  return (
    <div className="App">
      <Spinner isLoading={true} height="2rem" />
      <Bouncer isLoading={true} height="1rem" />
    </div>
  );
}

export default App;
