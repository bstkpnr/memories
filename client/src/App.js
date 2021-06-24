import React from "react";
//import img from "./components/img/img3.JPG";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {getPosts} from './actions/posts'
const App = () => {
 

  return (
    <>

      <Navbar />
      <Home />
    
    </>
  );
};

export default App;
