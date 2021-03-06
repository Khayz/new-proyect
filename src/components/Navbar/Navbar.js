import React from "react";
import { connect } from "react-redux";

import "./Navbar.scss";

import NavGuest from "./NavGuest/NavGuest";
import NavParent from "./NavParent/NavParent";
import NavTeacher from "./NavTeacher/NavTeacher";

const Navbar = ({ user }) => {
  const { _id, account } = user;

  let actualNavbar = <NavGuest />;

  if (_id && account === "parent") {
    actualNavbar = <NavParent user={user} />;
  } else if (_id && account === "teacher") {
    actualNavbar = <NavTeacher user={user} />;
  }

  return actualNavbar;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
