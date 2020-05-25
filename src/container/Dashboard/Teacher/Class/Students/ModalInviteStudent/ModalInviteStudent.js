import React from "react";
import ReactDOM from "react-dom";

import "./ModalInviteStudent.scss";
import { connect } from "react-redux";

const ModalInviteStudent = ({ addGroup, close, inviteID }) => {
  return ReactDOM.createPortal(
    <div className="modal_invite_student">
      <form className="modal_form">
        <div className="formdata">
          <h2>Invitación</h2>
        </div>
        <h5 className="invite-info">
          Con este código podras enviarlo a los padres, para poder registrar a
          su hijo bajo su cuenta
        </h5>
        <br />
        <h2>Tu ID de invitación!</h2>
        <p>{inviteID}</p>
        <button onClick={() => close(false)}>Cerrar</button>
      </form>
    </div>,
    document.getElementById("modal")
  );
};

const mapStateToProps = (state) => ({
  inviteID: state.groups.currentGroup.inviteID,
});

export default connect(mapStateToProps)(ModalInviteStudent);
