import React from "react";

import "./ModalCommentStudent.scss";

const ModalCommentStudent = () => {
  return (
    <div
      className="modal fade"
      id="centralModalSm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title w-100" id="myModalLabel">
              Comentario sobre el comportamiento del alumno
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <i
                onClick={() => {}}
                style={{ color: "#f1c04b", fontSize: "36px" }}
                className="fas fa-smile"
              ></i>
              <i
                style={{ color: "red", fontSize: "36px" }}
                className="fas fa-angry"
              ></i>
            </div>
            <div className="modal-body">
              <textarea
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  outline: "none",
                  margin: "auto",
                  border: "none",
                  textAlign: "center",
                  backgroundColor: "#f2f2f2",
                }}
                name="description"
                placeholder="Haz llegar el comportamiento del alumno al padre"
                type="text"
                required
              />
            </div>
          </form>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCommentStudent;
