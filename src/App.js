import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import WatchVideo from "./components/WatchVideo";
import Home from "./components/HomePage/Home";
import History from "./components/History";
import Favourites from "./components/Favourites";

const App = () => {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/watch' component={WatchVideo} />
        <Route path='/history' component={History} />
        <Route path='/favourites' component={Favourites} />
      </div>
    </BrowserRouter>
  );
};

export default App;
