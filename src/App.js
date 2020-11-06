import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage.component";
import ShopPage from "./pages/Shop/Shop.component.jsx";
import Header from "./components/Header/Header.component.jsx";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
