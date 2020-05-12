import React from "react";
import { v1 } from "uuid";

import "./ChildTasks.scss";
import { connect } from "react-redux";
import ModalTask from "./ModalTask/ModalTask";

const ChildTasks = ({ child }) => {
  return (
    <div className="ChildTasks">
      {child.tasks.map((task) => (
        <div
          key={v1()}
          className={`Task card text-white ${
            task.status === "approved" ? "bg-success" : "bg-danger"
          } mb-3`}
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">{`${
            task.status === "approved" ? "Entregada" : "No Entregada"
          }`}</div>
          <div className="card-body">
            <h5 className="card-title">Titulo: {task.title}</h5>
            <p className="card-text">Descripcion: {task.description}</p>
            <p className="card-text">
              Calificacion: {task.calification || "none"}
            </p>
            <p className="card-text">
              Fecha: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            {task.status !== "approved" && <ModalTask />}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  child: state.childs.actualChild,
});

export default connect(mapStateToProps)(ChildTasks);

/* <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
