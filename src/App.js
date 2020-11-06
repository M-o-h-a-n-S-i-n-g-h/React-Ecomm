import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage.component";

const Hats = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={Hats} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
