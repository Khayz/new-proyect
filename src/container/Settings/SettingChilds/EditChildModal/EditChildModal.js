import React from "react";
import { Link } from "react-router-dom";
import Kid from "../../../../Assets/Images/kid-icon.svg";

const EditChildModal = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalSubscriptionForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Editar</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-3">
                <img src={Kid} alt="" />
                <input
                  type="text"
                  id="form3"
                  className="form-control validate"
                />
                <label data-error="wrong" data-success="right" htmlFor="form3">
                  Nombre
                </label>
              </div>

              <div className="md-form mb-3">
                <input
                  type="text"
                  id="form2"
                  className="form-control validate"
                />
                <label data-error="wrong" data-success="right" htmlFor="form2">
                  Apellido
                </label>
              </div>

              <div className="md-form mb-3">
                <input
                  type="text"
                  id="form3"
                  className="form-control validate"
                />
                <label data-error="wrong" data-success="right" htmlFor="form3">
                  Grupo
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <Link to="/" className="btn btn-warning">
                Enviar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          data-toggle="modal"
          data-target="#modalSubscriptionForm"
          className="btn btn-primary"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default EditChildModal;
