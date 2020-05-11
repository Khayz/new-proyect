import React from "react";
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
      name: "Rebeca",
    },
  ];

  return (
    <div>
      {studers.map((students) => (
        <div className="StudentCard">
          <h3>{students.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default DemoStudents;
