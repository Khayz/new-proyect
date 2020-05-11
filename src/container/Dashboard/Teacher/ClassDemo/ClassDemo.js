import React from "react";
import { Link } from "react-router-dom";
import "./ClassDemo.scss";
import DemoStudents from "./DemoStudents/DemoStudents";

const ClassDemo = () => {
  return (
    <section>
      <div className="navLinks">
        <article className="student-content">
          <Link style={{ color: "#fff" }} to="/">
            <h4>Classroom</h4>
          </Link>
          <Link style={{ color: "#fff" }} to="/">
            <h4>Portafolio</h4>
          </Link>
          <Link style={{ color: "#fff" }} to="/">
            <h4>Mensajes</h4>
          </Link>
        </article>
      </div>
      <div>
        <DemoStudents />
      </div>
    </section>
  );
};

export default ClassDemo;
