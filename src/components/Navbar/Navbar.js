import React from "react";
import { connect } from "react-redux";

import "./Navbar.scss";

import NavGuest from "./NavGuest/NavGuest";
import NavParent from "./NavParent/NavParent";
import NavTeacher from "./NavTeacher/NavTeacher";

const Navbar = ({ user }) => {
  const { _id, account } = user;

  const activeLink = {
    backgroundColor: "#00aeef",
    color: "#fff",
    padding: "7px",
    borderRadius: "5px",
    fontWeight: "normal",
  };

  let actualNavbar = <NavGuest activeLink={activeLink} />;

  if (_id && account === "parent") {
    actualNavbar = <NavParent user={user} />;
  } else if (_id && account === "teacher") {
    actualNavbar = <NavTeacher />;
  }

  return actualNavbar;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
