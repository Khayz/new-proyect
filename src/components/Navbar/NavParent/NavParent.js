import React from "react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../../redux/actions/index.actions";
import { connect } from "react-redux";

const NavParent = ({ activeLink, user, logoutUser }) => {
  return (
    <header className="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/" exact activeStyle={activeLink}>
          <i className="far fa-address-book"></i> Home School
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.firstName + " " + user.lastName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  exact
                  activeStyle={activeLink}
                  className="dropdown-item"
                  to="/settings"
                >
                  Configuraciones
                </NavLink>
                <NavLink
                  onClick={logoutUser}
                  exact
                  activeStyle={activeLink}
                  className="dropdown-item"
                  to="/"
                >
                  Cerrar Sesion
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapDispatchToProps = {
  logoutUser,
};

export default connect(null, mapDispatchToProps)(NavParent);
