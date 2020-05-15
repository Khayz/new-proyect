import React, { useState } from "react";
import { registerUser } from "../../../redux/actions/index.actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SignUpParent({ registerUser }) {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    childs: [],
    account: "parent",
  });

  const handleRegisterData = (event) => {
    const { value, name } = event.target;
    setRegister((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    registerUser(register);
  };

  return (
    <form
      style={{ minHeight: "70vh" }}
      onSubmit={handleSubmitRegister}
      className="Register text-center border border-light p-5"
      action="#!"
    >
      <p className="h4 mb-4">Regístrate como padre</p>

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
        placeholder="Correo electronico"
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
        Al menos 8 caracteres y 1 digito
      </small>

      <input
        onChange={handleRegisterData}
        type="text"
        name="phone"
        id="defaultRegisterPhonePassword"
        className="form-control"
        placeholder="Numero Telefonico"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />
      <small
        id="defaultRegisterFormPhoneHelpBlock"
        className="form-text text-muted mb-4"
      ></small>

      <button
        style={{ backgroundColor: "rgb(0, 174, 239)" }}
        className="btn btn-info my-4 btn-block"
      >
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
        Eres profesor? regístrate como un
        <Link style={{ fontSize: "18px" }} to="/register/teacher">
          {" "}
          Profesor
        </Link>
      </p>
    </form>
  );
}

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(SignUpParent);
