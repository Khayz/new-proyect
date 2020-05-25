import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { v1 } from 'uuid';
import Carousel from 'react-bootstrap/Carousel';
import { updateHomework } from '../../../redux/actions/index.actions';

import './ModalTask.scss';
import { connect } from 'react-redux';

const ModalTask = ({ close, files, isOpen, title, task, updateHomework }) => {
  const [updateTask, setUpdateTask] = useState({
    status: '',
    calification: 0,
  });

  const imagesArray = Object.keys(files)
    .map((key) => files[key])
    .filter((imageURi) => imageURi);

  const Images = imagesArray.map((imgUri) => (
    <Carousel.Item key={v1()}>
      <img src={imgUri} alt='First slide' />
    </Carousel.Item>
  ));

  const handleUpdatedTask = (event) => {
    const { value, name } = event.target;
    setUpdateTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitTask = () => {
    updateHomework(task._id, updateTask, task.studentID);
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div className='modal_task'>
          <div className='card_modal'>
            <div className='d-flex justify-content-end'>
              <button className='btn-close' onClick={close}>
                x
              </button>
            </div>
            <div className='carousel__modal'>
              <Carousel>{Images}</Carousel>
            </div>
            <div className='card-body d-flex justify-content-center flex-column align-items-center'>
              <h4 className='card-title'>{title}</h4>
              <div className='card-content d-flex flex-column flex-xl-row justify-content-center my-2'>
                <select
                  value={updateTask.calification}
                  name='calification'
                  onChange={handleUpdatedTask}>
                  {new Array(10).fill(1).map((_, index) => (
                    <option key={v1()}>{index + 1}</option>
                  ))}
                </select>
                <select
                  onChange={handleUpdatedTask}
                  name='status'
                  className='m-1'>
                  <option>Pendiente</option>
                  <option>Resuelta</option>
                </select>
                <button onClick={handleSubmitTask} className='btn-card m-2'>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('modal')
      )
    : null;
};

const mapDispatchToProps = {
  updateHomework,
};

export default connect(null, mapDispatchToProps)(ModalTask);
