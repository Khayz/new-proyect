import React from "react";
import "./Teacher.scss";
import { Link } from "react-router-dom";

const Teacher = () => {
  return (
    <section className="Layout">
      <article className="sideBoard">
        <div className="teacher-info">
          <i className="fas fa-user-circle"></i>
          <h2>Profesor: Rogelio Plata</h2>
          <p>Profesor en la escuela primaria: Benito Juarez, 219 </p>
          <hr />
          <i className="fas fa-school"></i>
          <h2>Benito Juarez, 219</h2>
          <p>
            Tu escuela no tiene Profesor de nuestra app HOME-SCHOOL todavia
            verificalo aqui. manda un Email para ayudarte
          </p>
          <button>Cambiar escuela</button>
          <hr />
          <div>
            <h2>Aprendizaje Remoto con HOME-SCHOOL</h2>
            <p>
              Todo lo que tu nececitas para estar conectado con los estudiantes
              y sus familiares, donde quieran que esten. ❤️
            </p>
            <div>
              <h2>Video introductorio sobre el estudiante</h2>
              <iframe
                src="https://www.youtube.com/embed/yMvpJDbWX_c"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Video introductorio de HOME-SCHOOL.</p>
            </div>
            <div>
              <h2>Grandes Ideas</h2>
              <p>
                Grandes actividades para ayudar a los estudiantes a administrar
                sus trabajos.
              </p>
            </div>
          </div>
          <button>Ver todos los recursos</button>
        </div>
      </article>
      <div className="LayoutItem">
        <Link to="/demo-class" className="TeacherCards">
          <h2>Clase Demo</h2>
          <i className="fas fa-book"></i>
        </Link>
        <Link className="TeacherCards">
          <h2>Crear Clase</h2>
          <i className="fas fa-plus-circle"></i>
        </Link>
      </div>
    </section>
  );
};

export default Teacher;
