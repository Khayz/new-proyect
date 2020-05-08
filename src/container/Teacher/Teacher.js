import React from "react";
import "./Teacher.scss";

const Teacher = () => {
  return (
    <section className="Layout">
      <article className="sideBoard">
        <div className="teacher-info">
          <h2>Profe: Roger</h2>
          <p>Profesor en la escuela primaria: Benito Juarez, 219 </p>
          <hr />
          <h2>Benito Juarez, 219</h2>
          <p>
            Tu escuela no tiene Profesor de nuestra app HOME-SCHOOL todavia
            verificalo aqui. manda un Email para ayudarte
          </p>
          <button>Cambiar escuela</button>
        </div>
        <hr />
        <div>
          <h2>Aprendizaje Remoto con HOME-SCHOOL</h2>
          <p>
            Todo lo que tu nececitas para estar conectado con los estudiantes y
            sus familiares, donde quieran que esten. ❤️
          </p>
          <div>
            <h2>Video introductorio sobre el estudiante</h2>
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
      </article>
      <div className="LayoutItem">
        <div className="TeacherCards">
          <h2>Demo Class</h2>
          <i className="fas fa-book"></i>
        </div>
        <div className="TeacherCards">
          <h2>Crear Clase</h2>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
