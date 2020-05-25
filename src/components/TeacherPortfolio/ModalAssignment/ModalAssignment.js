import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setNewAssignment } from '../../../redux/actions/index.actions';

import './ModalAssignment.scss';

const ModalAssignment = ({ close, setNewAssignment, _id }) => {
  const [assignment, setAssignment] = useState('');

  const handleAssignment = (event) => {
    setAssignment(event.target.value);
  };

  const handleSubmitAssignment = (event) => {
    event.preventDefault();
    setNewAssignment(assignment, _id);
    close(false);
  };

  return ReactDOM.createPortal(
    <div className='modal_assignment'>
      <form className='modal_form'>
        <div className='formdata'>
          <h4 className='modal-title w-100 font-weight-bold'>
            Nombre de la asignaturas
          </h4>

          <i onClick={() => close(false)} className='fas fa-times'></i>
        </div>
        <div className='form p-5 mb-4 d-flex flex-column'>
          <input
            className='form-control mb-4'
            onChange={handleAssignment}
            name='assignment'
            value={assignment}
            placeholder='Asignatura*'
            required
          />
          <button onClick={handleSubmitAssignment} className='mb-4'>
            Añadir
          </button>
        </div>
      </form>
    </div>,
    document.getElementById('modal')
  );
};

const mapStateToProps = (state) => ({
  _id: state.groups.currentGroup._id,
});

const mapDispatchToProps = { setNewAssignment };

export default connect(mapStateToProps, mapDispatchToProps)(ModalAssignment);
