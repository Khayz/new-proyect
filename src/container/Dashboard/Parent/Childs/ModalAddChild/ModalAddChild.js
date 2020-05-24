import React, { useState } from "react";
import { addChild } from "../../../../../redux/actions/index.actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import "./ModalAddChild.scss";

import Spinner from "../../../../../components/Ui/Spinner/Spinner";

const ModalAddChild = ({ parentID, addChild, loading }) => {
  const [child, setChild] = useState({
    firstName: "",
    lastName: "",
    parentID: parentID,
    groupID: "",
    group: "",
    school: "",
    assignments: [],
  });

  const handleChildData = (event) => {
    const { name, value } = event.target;
    setChild((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitChild = async (event) => {
    event.preventDefault();
    addChild(child);
    setChild({
      firstName: "",
      lastName: "",
      parentID: parentID,
      groupID: "",
      group: "",
      school: "",
      assignments: [],
    });
    toast.info("Child Created!");
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="ModalChild modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Añadir</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {loading ? (
              <section className="add_child_loading">
                <Spinner />
              </section>
            ) : (
              <form
                onSubmit={handleSubmitChild}
                className="ModalRegister text-center border border-light p-5"
                action="#!"
              >
                <p className="connect-info">
                  Para conectarte al aula de tu hijo, necesitarás que el
                  profesor te dé una invitación con el código de la clase.
                </p>
                <div className="form-row mb-4">
                  <div className="col">
                    <input
                      onChange={handleChildData}
                      type="text"
                      name="firstName"
                      id="defaultRegisterFormFirstName"
                      className="form-control"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handleChildData}
                      type="text"
                      name="lastName"
                      id="defaultRegisterFormLastName"
                      className="form-control"
                      placeholder="Apellido"
                      required
                    />
                  </div>
                </div>

                <input
                  onChange={handleChildData}
                  type="text"
                  name="groupID"
                  id="defaultRegisterFormEmail"
                  className="form-control mb-4"
                  placeholder="Código de clase"
                />

                <button className="btn btn-info my-4 btn-block add-button">
                  Añadir
                </button>
                <button
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-info my-4 btn-block add-button"
                >
                  Cerrar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        <i
          data-toggle="modal"
          data-target="#modalRegisterForm"
          className="fas fa-plus-circle"
        ></i>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.childs.loading,
});

const mapDispatchToProps = {
  addChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddChild);
