import React from "react";
import "./Assignments.scss";
import { Link, Switch, Route } from "react-router-dom";
import childChart from "./ChartChild/ChartChild";

const Assignments = (props) => {
  const morriyos = [
    { materia: "Español" },
    { materia: "Deportes" },
    { materia: "Historia" },
    { materia: "Matematicas" },
    { materia: "Ciencias" },
  ];

  return (
    <div>
      <h1>Calificaciones</h1>
      <div className="assignments">
        {morriyos.map((morriyo) => (
          <div className="childCard">
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
    </div>
  );
};

export default Assignments;