import React, { useState, useEffect } from "react";
import { registerUser } from "../../../redux/actions/index.actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import "./SignUpParent.scss";

import Spinner from "../../Ui/Spinner/Spinner";
import { Link } from "react-router-dom";

function SignUpParent({ registerUser, error, isLoading }) {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    childs: [],
    account: "parent",
  });

  useEffect(() => {
    if (error !== null) {
      toast.error(error);
    }
  }, [error]);

  const handleRegisterData = (event) => {
    const { value, name } = event.target;
    setRegister((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    (async () => {
      await registerUser(register);
      if (error !== null) {
        toast.error(error);
      }
    })();
  };

  return (
    <form
      onSubmit={handleSubmitRegister}
      className="FormRegister text-center border border-light p-5"
      action="#!"
    >
      <p className="h4 mb-4">Registro Padres</p>

      {isLoading ? (
        <article className="login_auth_register">
          <Spinner />
        </article>
      ) : (
        <>
          <div className="form-row mb-4">
            <div className="col">
              <input
                onChange={handleRegisterData}
                type="text"
                name="firstName"
                id="defaultRegisterFormFirstName"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="col">
              <input
                onChange={handleRegisterData}
                type="text"
                name="lastName"
                id="defaultRegisterFormLastName"
                className="form-control"
                placeholder="Apellido"
              />
            </div>
          </div>
          <input
            onChange={handleRegisterData}
            type="email"
            name="email"
            id="defaultRegisterFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />
          <input
            onChange={handleRegisterData}
            type="password"
            name="password"
            id="defaultRegisterFormPassword"
            className="form-control"
            placeholder="Contraseña"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            Al menos 8 caracteres y 1 dígito
          </small>
          <input
            onChange={handleRegisterData}
            type="tel"
            name="phone"
            id="defaultRegisterPhonePassword"
            className="form-control"
            placeholder="Número Telefónico"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            className="form-text text-muted mb-4"
          ></small>
          <button className="btn btn-info my-4 btn-block register-btn">
            Regístrate
          </button>
          <p>¡Regístrate con tus redes!</p>
          <Link to="/" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </Link>
          <Link to="/" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text"></i>
          </Link>
          <Link to="/" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </Link>
          <Link to="/" className="mx-2" role="button">
            <i className="fab fa-github light-blue-text"></i>
          </Link>
          <hr />
          <p>
            ¿Eres Profesor? Regístrate como:
            <Link style={{ fontSize: "18px" }} to="/register/teacher">
              {" "}
              Profesor
            </Link>
          </p>
        </>
      )}
    </form>
  );
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isLoading: state.auth.loading,
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpParent);
