import React from "react";
import { Link } from "react-router-dom";
import DemoStudents from "./DemoStudents/DemoStudents";

import "./DemoClass.scss";

const DemoClass = () => {
  return (
    <section>
      <div className="navLinks">
        <article className="student-content">
          <Link style={{ color: "#fff" }} to="/demo-class">
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

export default DemoClass;
