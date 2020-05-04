import React from "react";
import "./Notifications.scss";

const Notifications = () => {
  return (
    <div className="notifications">
      <i className="fas fa-bell"></i>
      <h2>Notificaciones</h2>
      <h4>Notificaciones por correo electrónico</h4>
      <p>
        Tus correos electrónicos se enviarán a 'email de la persona'. Si deseas
        dejar de recibir algún mensaje, ubicado en la parte inferior de este.
      </p>
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Notifications;
