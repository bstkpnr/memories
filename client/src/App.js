import React from "react";
//import img from "./components/img/img3.JPG";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Auth from "./components/Auth/Auth.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
