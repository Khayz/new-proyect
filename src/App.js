import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import HomeGuest from "./container/HomeGuest/HomeGuest";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" render={() => <HomeGuest />} />
        <Route exact path="/register/:account" render={() => <SignUp />} />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
