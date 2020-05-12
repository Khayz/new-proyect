import React from "react";
import "./PrincipalContent.scss";
import { Link } from "react-router-dom";

const PrincipalContent = () => {
  return (
    <div className="PrincipalContent">
      <section className="speach">
        <h1>
          Lleva a cada familia a <br /> tu aula
        </h1>
        <p>
          ¡Únete al 95% de las escuelas en los Estados Unidos que utilizan
          'HOME-SCHOOL' para involucrar a los niños y conectarse con las
          familias! Gratis para los profesores, para siempre.
        </p>
        <h2>Inscribirse como un...</h2>
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
      <section className="video-opening">
        <iframe
          title="video-opening"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/srR73KoE5P8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default PrincipalContent;
