import React, { useState, useEffect } from "react";
import { registerUser } from "../../../redux/actions/index.actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import "./SignUpTeacher.scss";

import Spinner from "../../Ui/Spinner/Spinner";
import { Link } from "react-router-dom";

const SignUpTeacher = ({ registerUser, error, isLoading }) => {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    cct: "",
    account: "teacher",
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
      <p className="h4 mb-4">Regístrate como profesor</p>

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
            id="defaultRegisterFormEmail"
            name="email"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            onChange={handleRegisterData}
            type="password"
            id="defaultRegisterFormPassword"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            Al menos 8 caracteres y 1 digito
          </small>

          <input
            onChange={handleRegisterData}
            type="tel"
            id="defaultRegisterPhonePassword"
            name="phone"
            className="form-control"
            placeholder="Numero Telefonico"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <input
            onChange={handleRegisterData}
            type="text"
            name="cct"
            className="form-control mt-2"
            placeholder="CCT"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            className="form-text text-muted mb-4"
          ></small>

          <button className="btn btn-info my-4 btn-block register-btn">
            Regístrate
          </button>

          <p>Regístrate con tus redes</p>

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
            Eres padre? Regístrate como un
            <Link style={{ fontSize: "18px" }} to="/register/parent">
              {" "}
              Padre
            </Link>
          </p>
        </>
      )}
    </form>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isLoading: state.auth.loading,
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpTeacher);
