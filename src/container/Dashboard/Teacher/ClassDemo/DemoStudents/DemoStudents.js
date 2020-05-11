import React from "react";

import Monster from "../../../../../Assets/Images/avatar.svg";

import "./DemoStudents.scss";

const DemoStudents = () => {
  const studers = [
    {
      name: "Mario",
    },
    {
      name: "Willy",
    },
    {
      name: "Jordi",
    },
    {
      name: "Rebecca",
    },
    {
      name: "Ricardo",
    },
  ];

  return (
    <div className="student-list">
      {studers.map((students) => (
        <div className="StudentCard">
          <figure>
            <img src={Monster} alt="" />
          </figure>
          <h3>{students.name}</h3>
        </div>
      ))}
      <div style={{ border: `dashed 1px #ccc` }} className="StudentCard">
        <h3>Añadir estudiante</h3>
        <i
          style={{ color: "blue", fontSize: "34px" }}
          className="fas fa-plus-circle"
        ></i>
      </div>
    </div>
  );
};

export default DemoStudents;
