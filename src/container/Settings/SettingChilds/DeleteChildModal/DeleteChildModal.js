import React from "react";
import { Link } from "react-router-dom";

const DeleteChildModal = (props) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        data-toggle="modal"
        data-target="#modalConfirmDelete"
      >
        eliminar
      </button>

      <div
        className="modal fade"
        id="modalConfirmDelete"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-sm modal-notify modal-danger"
          role="document"
        >
          <div className="modal-content text-center">
            <div className="modal-header d-flex justify-content-center">
              <p className="heading">Estas Seguro</p>
            </div>

            <div className="modal-body">
              <i className="fas fa-times fa-4x animated rotateIn"></i>
            </div>

            <div className="modal-footer flex-center">
              <Link to="/" className="btn  btn-outline-danger">
                Elminar
              </Link>
              <Link
                type="button"
                style={{ color: "#fff" }}
                className="btn btn-danger waves-effect"
                data-dismiss="modal"
              >
                Cancelar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteChildModal;
