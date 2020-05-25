import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./ModalClass.scss";
import { addGroup } from "../../../../redux/actions/groups.action";
import { connect } from "react-redux";
import { v1 } from "uuid";

const ModalClass = ({ addGroup, close }) => {
  const [group, setGroup] = useState({
    cct: "",
    group: "1",
    class: "A",
  });

  const handleGroup = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setGroup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitGroup = (event) => {
    event.preventDefault();
    if (group.cct.length > 0 && group.group.length > 0) {
      console.log("HELLO");
      addGroup({ group: group.group + "-" + group.class, cct: group.cct });
      close(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal_class">
      <form className="modal_form">
        <div className="form_title">
          <h2>Crear Clase</h2>
          <i onClick={() => close(false)} className="fas fa-times-circle"></i>
        </div>
        <input
          onChange={handleGroup}
          name="cct"
          value={group.cct}
          type="text"
          placeholder="CCT*"
          required
        />
        <select
          required
          value={group.group}
          onChange={handleGroup}
          name="group"
        >
          {new Array(6).fill(0).map((group, index) => (
            <option key={v1()}>{index + 1}</option>
          ))}
        </select>
        <select
          required
          value={group.class}
          onChange={handleGroup}
          name="class"
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
        </select>
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
