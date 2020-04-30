import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import HomeGuest from "./container/HomeGuest/HomeGuest";
import Footer from "./components/Footer/Footer";
import ModalRegister from "./components/Ui/ModalRegister/ModalRegister";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" render={() => <HomeGuest />} />
        <Route path="/register/:account" component={ModalRegister} />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
