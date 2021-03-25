import ProductsList from "./components/ProductsList";
import LandingPage from "./components/LandingPage";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GetReceipts from "./components/GetReceipts";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/get-receipts" component={GetReceipts}></Route>
        <Route exact path="/add-receipt" component={ProductsList}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
