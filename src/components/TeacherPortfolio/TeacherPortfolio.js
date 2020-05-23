import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v1 } from 'uuid';
import ModalTask from './ModalTask/ModalTask';
import Dropdown from 'react-bootstrap/Dropdown';
import './TeacherPortfolio.scss';

import ModalAssignment from './ModalAssignment/ModalAssignment';

const TeacherPortfolio = ({ students, assignments, user }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [selectedTaskFiles, setSelectedTaskFiles] = useState({});
  const [selectedTaskTitle, setSelectedTaskTitle] = useState({});

  // const prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById('asignature-btn-float').style.top = '0';
  //   } else {
  //     document.getElementById('asignature-btn-float').style.top = '-50px';
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  return (
    <section className='Teacher-Portfolio'>
      <ModalTask
        isOpen={openTaskModal}
        close={() => setOpenTaskModal(false)}
        files={selectedTaskFiles}
        title={selectedTaskTitle}
      />
      <div
        id='asignature-btn-float'
        className='asignature-btn-float .d-none d-md-block d-sm-block d-lg-none '>
        <i
          onClick={() => setOpenModal(true)}
          className='fas fa-plus-circle mx-2'
          aria-hidden='true'></i>
      </div>
      <div className='sideBoard-activities d-none d-xl-block'>
        <article>
          <h2>Actividades</h2>
        </article>
        <hr />
        <article>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <h2>Asignaturas</h2>
            <i
              onClick={() => setOpenModal(true)}
              className='fas fa-plus-circle mx-2'
              aria-hidden='true'></i>
          </div>
          <div className='assignments-container'>
            {assignments.map((assignment) => (
              <div
                className='assignment d-flex justify-content-between'
                key={v1()}>
                <i className='fas fa-book-open mr-2'></i>
                <h4 key={v1()}>{assignment}</h4>
              </div>
            ))}
          </div>

          {openModal && <ModalAssignment close={setOpenModal} />}
        </article>
        <hr />
      </div>
      <article className='d-flex flex-column align-items-center flex-grow-1'>
        <div className='name-students flex-xl-row d-flex flex-column align-items-center justify-content-center mt-4 '>
          <h2 className='m-3'>Estudiantes</h2>
          <Dropdown className='mb-lg-1 mb-md-1'>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Elige un estudiante
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {students.map((student) => (
                <div
                  className='d-flex justify-content-between align-items-center mb-3'
                  key={v1()}>
                  <Dropdown.Item>{student.firstName}</Dropdown.Item>
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='portfolio-info d-flex justify-content-center flex-wrap px-3 mb-5'>
          {user.tasks.map((task) => {
            console.log('estas son las task => ', task);
            return (
              <div
                className='portfolio-container d-flex justify-content-center shadow-lg rounded m-3 m-md-2 '
                key={v1()}>
                <form key={v1()}>
                  <div className='task-file-container d-flex justify-content-center align-items-center'>
                    <img
                      key={v1()}
                      src={task.files.task0}
                      alt='task'
                      onClick={() => {
                        setSelectedTaskFiles(task.files);
                        setOpenTaskModal(true);
                        setSelectedTaskTitle(task.title);
                      }}
                    />
                  </div>

                  <div>
                    <h5 className='card-title'>{task.title}</h5>
                    <button
                      className='btn-task-file m-2'
                      onClick={() => {
                        setSelectedTaskFiles(task.files);
                        setOpenTaskModal(true);
                        setSelectedTaskTitle(task.title);
                      }}>
                      Calificar
                    </button>
                  </div>
                </form>
              </div>
            );
          }) || (
            <div>
              <h2>Bienvenido a tus portafolios</h2>
              <p>
                Un lugar para completar las actividades y compartirlas a tus
                estudiantes y sus padres.
              </p>
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

const mapStateToProps = (state) => ({
  students: state.groups.currentGroup.students,
  assignments: state.groups.currentGroup.assignments,
  user: state.auth.user,
});

export default connect(mapStateToProps)(TeacherPortfolio);
