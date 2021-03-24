import ProductsList from "./components/ProductsList";
import LandingPage from "./components/LandingPage";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/receipts" component={ProductsList}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
