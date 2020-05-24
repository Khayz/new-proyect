import React from "react";
import "./PrincipalContent.scss";
// import Backpack from "../../../Assets/Images/backpack-02.svg"
import { Link } from "react-router-dom";

const PrincipalContent = () => {
  return (
    <div className="PrincipalContent">
      <section className="speech">
        <h1>
          Home School
        </h1>
        <p>
          Únete a las escuelas en México que utilizan
          Home School <br /> para organizar la vida escolar de todos los estudiantes, <br />  padres y profesores.
        </p>
        <h3>
          Gratis para profesores ¡Siempre!
        </h3>
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
        {/* <figure>
          <img src={Backpack} alt="imagen" />
        </figure> */}
      </section>
      <section className="video-opening">
        <iframe
          title="video-opening"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/srR73KoE5P8?controls=1&autoplay=1&loop=1&showinfo=0&rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default PrincipalContent;
