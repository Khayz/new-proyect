import React from "react";

import Tmonster from "./../../Assets/Images/monstert.svg";
import "./TeacherPost.scss";

const TeacherPost = () => {
  return (
    <section className="Post">
      <article className="post-events">
        <h3>Eventos proximos</h3>
        <hr />
        <p>No hay eventos proximos</p>
      </article>
      <div className="post-cards">
        <article className="post-info">
          <figure>
            <img src={Tmonster} alt="" />
          </figure>
          <h3>Bienvenido a tus publicaciones</h3>
          <p>
            Tus publicaciones son la manera mas facil de compartir a tu
            classroom las actualizaciones de cada tarea
          </p>
        </article>
        <article className="teacher-post">
          <i className="fas fa-user-circle"></i>
          <textarea
            maxLength="300"
            placeholder="Que pasa en tu classroom?"
            type="text"
          />
          <hr />
          <button className="btn btn-primary">Publicar</button>
        </article>
      </div>
    </section>
  );
};

export default TeacherPost;
