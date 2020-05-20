import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteChild } from "../../../redux/actions/childs.action";
import { v1 } from "uuid";
import { toast } from "react-toastify";

import Kid from "../../../Assets/Images/kid-icon.svg";

import "./SettingChilds.scss";
import ModalDeleteChild from "./ModalDeleteChild/ModalDeleteChild";

const SettingChild = ({ childs, deleteChild }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteChild = async (child) => {
    await deleteChild(child);
    toast.error("Child Deleted");
  };

  return (
    <div className="settings-childs">
      <h2>Hijos</h2>
      {childs.length > 0 ? (
        <div className="settings-list-child">
          {childs.map((child) => {
            return (
              <div key={v1()} className="card">
                <img className="card-img-top" src={Kid} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">
                    {child.firstName} {child.lastName}
                  </h4>
                  <p className="card-text">
                    Podras editar, eliminar o ver el progreso de cada
                    estudiante.
                    <br />
                    <span>Grupo: {child.group}</span>
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => setOpenModal(true)}
                  >
                    Eliminar
                  </button>
                  {openModal && (
                    <ModalDeleteChild
                      deleteChild={handleDeleteChild}
                      child={child}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No hay estudiantes</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  childs: state.childs.childList,
});

const mapDispatchToProps = {
  deleteChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingChild);
