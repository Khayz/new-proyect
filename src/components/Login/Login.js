import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/index.actions";

import "./Login.scss";

const Login = ({ loginUser }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginData = (event) => {
    const { value, name } = event.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    loginUser(login);
  };

  return (
    <form
      onSubmit={handleSubmitLogin}
      className="FormLogin text-center border border-light p-5"
      action="#!"
    >
      <p className="h4 mb-4">Iniciar Sesión</p>

      <input
        onChange={handleLoginData}
        type="email"
        name="email"
        id="defaultLoginFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
      />

      <input
        onChange={handleLoginData}
        type="password"
        name="password"
        id="defaultLoginFormPassword"
        className="form-control mb-4"
        placeholder="Contraseña"
      />

      <div className="d-flex justify-content-around">
        <a href="/">¿Olvidaste tu contraseña?</a>
      </div>

      <button className="btn btn-info btn-block my-4">Iniciar Sesión</button>

      <p>
        ¿No eres miembro? <br /> <a href="/">¡Regístrate!</a>
      </p>

      <p>O regístrate con:</p>

      <a href="/" className="mx-2" role="button">
        <i className="fab fa-facebook-f light-blue-text"></i>
      </a>
      <a href="/" className="mx-2" role="button">
        <i className="fab fa-twitter light-blue-text"></i>
      </a>
      <a href="/" className="mx-2" role="button">
        <i className="fab fa-linkedin-in light-blue-text"></i>
      </a>
      <a href="/" className="mx-2" role="button">
        <i className="fab fa-github light-blue-text"></i>
      </a>
    </form>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
