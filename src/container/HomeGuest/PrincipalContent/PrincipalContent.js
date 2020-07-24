import React from "react";
import "./PrincipalContent.scss";

import { Link } from "react-router-dom";
import Animation from "./Animation/Animation";

const PrincipalContent = () => {
  return (
    <div className="PrincipalContent">
      <section className="video-opening">
        <Animation />
      </section>
      <section className="speech">
        <p>
          Únete a las escuelas en México que utilizan Home School <br /> para
          organizar la vida escolar de todos los estudiantes, <br /> padres y
          profesores.
        </p>
        <h3>Gratis para profesores ¡Siempre!</h3>
        <h2>Inscribirse como:</h2>
        <div className="typeAccount">
          <Link className="teacher" to="/register/teacher">
            <i className="icon fas fa-chalkboard-teacher"></i>
            <p>Maestro</p>
          </Link>
          <Link className="parent" to="/register/parent">
            <i className="icon fas fa-user"></i>
            <p>Padre</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrincipalContent;
