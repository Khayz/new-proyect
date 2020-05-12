import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./ModalClass.scss";
import { addGroup } from "../../../../redux/actions/groups.action";
import { connect } from "react-redux";
const ModalClass = ({ addGroup, close }) => {
  const [group, setGroup] = useState({
    cct: "",
    group: "",
  });

  const handleGroup = (event) => {
    const { value, name } = event.target;
    setGroup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitGroup = (event) => {
    event.preventDefault();
    addGroup(group);
    close(false);
  };

  return ReactDOM.createPortal(
    <div className="modal_class">
      <form className="modal_form">
        <h2>Crear Clase</h2>
        <input
          onChange={handleGroup}
          name="cct"
          value={group.cct}
          type="text"
          placeholder="CCT*"
        />
        <input
          onChange={handleGroup}
          name="group"
          value={group.group}
          type="text"
          placeholder="Grupo*"
        />
        <button onClick={handleSubmitGroup}>Crear</button>
      </form>
    </div>,
    document.getElementById("modal")
  );
};

const mapDispatchToProps = {
  addGroup,
};

export default connect(null, mapDispatchToProps)(ModalClass);
