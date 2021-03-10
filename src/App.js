import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import WatchVideo from "./components/WatchVideo";
import Home from "./components/HomePage/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/watch' component={WatchVideo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
