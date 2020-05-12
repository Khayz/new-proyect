import React from "react";
import "./Settings.scss";
import Notifications from "./Notifications/Notifications";
import SettingChild from "./SettingChilds/SettingChild";

const Settings = () => {
  return (
    <div className="settings">
      <form className="form-settings">
        <div className="form-group">
          <h2>
            Información básica <i className="fas fa-user"></i>
          </h2>
          <label htmlFor="formGroupExampleInput">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Apellido"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput3">Telefono</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="Telefono"
          />
        </div>
        <div className="btn-form-setting">
          <button type="submit" className="btn btn-primary">
            Guardar Cambios
          </button>
        </div>
      </form>
      <hr />
      <SettingChild />
      <Notifications />
      <hr />
      <button type="submit" className="btn btn-primary">
        Guardar Cambios
      </button>
    </div>
  );
};

export default Settings;
