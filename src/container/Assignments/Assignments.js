import React from "react";
import "./Assignments.scss";
import { Link, Switch, Route } from "react-router-dom";
import childChart from "./ChartChild/ChartChild";

import { v1 } from "uuid";

const Assignments = (props) => {
  const morriyos = [
    { materia: "Español" },
    { materia: "Deportes" },
    { materia: "Historia" },
    { materia: "Matematicas" },
    { materia: "Ciencias" },
    { materia: "Musica" },
  ];

  return (
    <>
      <div className="assignment-info">
        <h1>Calificaciones</h1>
        <p>Aqui podras ver el progreso de tu hijo en cada materia.</p>
      </div>
      <div className="assignments">
        {morriyos.map((morriyo) => (
          <div key={v1()} className="childCard">
            <h2>{morriyo.materia}</h2>
            <Link to={`${props.match.url}/charts`} className="button">
              Ver Calificaciones
            </Link>
          </div>
        ))}
      </div>
      <Switch>
        <Route path={`${props.match.url}/charts`} component={childChart} />
      </Switch>
    </>
  );
};

export default Assignments;
