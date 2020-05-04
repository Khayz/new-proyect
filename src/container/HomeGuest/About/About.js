import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="About">
      <h1>
        'HOME-SCHOOL' conecta a profesores, <br /> alumnos y padres para
        construir <br /> comunidades asombrosas en el aula
      </h1>
      <div className="card-group cards">
        <div className="card">
          <i className="fas fa-heart"></i>

          <div className="card-body">
            <h5 className="card-title">Crea una cultura positiva</h5>
            <p className="card-text">
              Los profesores pueden animar a sus alumnos para fomentar cualquier
              habilidad o valor: trabajo duro, amabilidad, ayuda al prójimo y
              mucho más
            </p>
          </div>
        </div>
        <div className="card">
          <i className="fas fa-smile"></i>

          <div className="card-body">
            <h5 className="card-title">Dale una voz a los alumnos</h5>
            <p className="card-text">
              Los alumnos pueden exhibir lo que han aprendido añadiendo fotos y
              vídeos a sus propias carpetas
            </p>
          </div>
        </div>
        <div className="card">
          <i className="fas fa-book-open"></i>

          <div className="card-body">
            <h5 className="card-title">Comparte momentos con los padres</h5>
            <p className="card-text">
              Aumenta el compromiso de los padres compartiendo fotos y vídeos de
              maravillosos momentos del aula
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
