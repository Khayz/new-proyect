import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { authUser, getChilds, getGroups } from "./redux/actions/index.actions";

import "./App.scss";
import "react-toastify/dist/ReactToastify.min.css";

import Navbar from "./components/Navbar/Navbar";
import HomeGuest from "./container/HomeGuest/HomeGuest";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./container/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Settings from "./container/Settings/Settings";
// import Assignments from './container/Assignments/Assignments';
import Class from "./container/Dashboard/Teacher/Class/Class";

function App({ authUser, user, getChilds, getGroups }) {
  const { _id } = user;

  useEffect(() => {
    authUser();
  }, [authUser]);

  useEffect(() => {
    if (_id) {
      getChilds();
      getGroups();
    }
  }, [getChilds, getGroups, _id]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Route path='/assignments' component={Assignments} /> */}
        <Route render={() => <Redirect to="/" />} />
        <Route
          exact
          path="/"
          render={() => (_id ? <Dashboard user={user} /> : <HomeGuest />)}
        />
        <Route
          path="/login"
          render={() => (_id ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          path="/settings"
          render={() => (_id ? <Settings /> : <Redirect to="/" />)}
        />
        <Route
          path="/register/:account"
          render={(props) =>
            _id ? <Redirect to="/" /> : <SignUp {...props} />
          }
        />
        <Route
          path="/group/:classID"
          render={(props) => (_id ? <Class {...props} /> : <Redirect to="/" />)}
        />
        <Footer />
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
          draggable
          position="top-right"
        />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  authUser,
  getChilds,
  getGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
