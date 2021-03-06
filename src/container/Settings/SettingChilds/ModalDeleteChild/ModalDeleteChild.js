import React from "react";
import ReactDOM from "react-dom";

import "./ModalDeleteChild.scss";

const ModalDeleteChild = ({ deleteChild, child, close }) => {
  return ReactDOM.createPortal(
    <section className="moda_delete_child">
      <article className="data">
        <h2>Eliminar</h2>
        <i onClick={() => close(false)} className="fas fa-times-circle"></i>
        <hr />
        <h2>
          ¿Esta seguro que desea hacer esto?, Todos los datos relacionados a su
          hijo desapareceran y no tendra registro alguno!
        </h2>
        <br />
        <button onClick={() => deleteChild(child)}>Eliminar</button>
      </article>
    </section>,
    document.getElementById("modal")
  );
};

export default ModalDeleteChild;
