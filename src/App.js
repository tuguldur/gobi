import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import { Home } from "pages";
// components
import { Header } from "components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
