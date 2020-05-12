import React from "react";
import "./TeacherPortfolio.scss";

const TeacherPortfolio = () => {
  return (
    <section className="portfolio-index">
      <div className="sideBoard-activities">
        <article>
          <h3>Todos los envios</h3>
        </article>

        <hr />
        <article className="name-students">
          <h2>Estudiantes</h2>
          <h4>
            <i className="fas fa-plus-circle"></i>Añadir Estudiante
          </h4>
          <h4>Sarah</h4>
          <h4>Ricardo</h4>
          <h4>David</h4>
          <h4>Liliana</h4>
          <h4>Alex</h4>
        </article>
      </div>
      <article className="portfolio-info">
        <h2>Bienvenido a tus portafolios</h2>
        <p>
          Un lugar para completar las actividades y compartirlas a tus
          estudiantes y sus padres.
        </p>
      </article>
    </section>
  );
};

export default TeacherPortfolio;
