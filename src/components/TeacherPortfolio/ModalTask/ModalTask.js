import React from 'react';
import ReactDOM from 'react-dom';
import { v1 } from 'uuid';

import './ModalTask.scss';

const ModalTask = ({ close, tasks }) => {
  console.log(tasks);
  return ReactDOM.createPortal(
    <div
      className='modal_task'
      onClick={() => {
        close(false);
      }}>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade modal_form'
        data-ride='carousel'>
        <div className='carousel-inner d-flex justify-content-center align-items-center'>
          {Object.keys(tasks)
            .filter((file) => tasks[file])
            .map((file) => (
              <div className='carousel-item active'>
                <img
                  key={v1()}
                  src={tasks[file]}
                  alt='task'
                  className='d-block'
                />
              </div>
            ))}
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleFade'
          role='button'
          data-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleFade'
          role='button'
          data-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default ModalTask;
