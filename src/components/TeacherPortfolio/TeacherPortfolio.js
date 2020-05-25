import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v1 } from 'uuid';
import { getStudentHomework } from '../../redux/actions/index.actions';

import './TeacherPortfolio.scss';

import ModalAssignment from './ModalAssignment/ModalAssignment';
import ModalTask from './ModalTask/ModalTask';

const TeacherPortfolio = ({
  students,
  assignments,
  homework,
  getStudentHomework,
  message,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [selectedTaskFiles, setSelectedTaskFiles] = useState({});
  const [selectedTaskTitle, setSelectedTaskTitle] = useState({});
  const [actualTask, setActualTask] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handlerSidebarIsOpen = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const Sidebar = () => (
    <div
      className={
        sidebarOpen
          ? 'sideBoard-activities d-none d-xl-block'
          : 'sideBoard-activities-showed px-5 py-3 '
      }>
      <article>
        <div className='assignments-title d-flex justify-content-between align-items-center mb-3'>
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
        <hr />
        <div className='name-students d-flex align-items-center justify-content-start mb-3'>
          <h2>Estudiantes</h2>
        </div>
        <div>
          {students.map((student) => (
            <div className='d-flex justify-content-between' key={v1()}>
              <i className='fas fa-user-graduate'></i>
              <h4
                onClick={() => handleActualHomework(student)}
                className='mb-2'
                name='hello'
                value={student.firstName}
                key={v1()}>
                {student.firstName}
              </h4>
            </div>
          ))}
        </div>

        {openModal && <ModalAssignment close={setOpenModal} />}
      </article>
      <hr />
      {!sidebarOpen ? (
        <button className='btn-close-sidebar' onClick={handlerSidebarIsOpen}>
          {' '}
          Cerrar
        </button>
      ) : null}
    </div>
  );

  useEffect(() => {
    console.log(homework);
  }, [homework]);

  const handleActualHomework = (student) => {
    getStudentHomework(student._id);
  };

  return (
    <section className='Teacher-Portfolio'>
      <div
        id='asignature-btn-float'
        className='asignature-btn-float .d-none d-md-block d-sm-block d-lg-block d-xl-none '>
        <i
          onClick={handlerSidebarIsOpen}
          className='fas fa-bars'
          aria-hidden='true'></i>
      </div>
      <Sidebar />
      <article className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
        <div className='portfolio-info d-flex justify-content-center flex-wrap p-3 m-auto'>
          {message !== null ? (
            <h3 className='mt-xl-5 mt-lg-5 mt-3'>{message}</h3>
          ) : (
            homework.map((task) => (
              <div
                style={
                  task.status === 'Resuelta'
                    ? { backgroundColor: '#3d5af1' }
                    : { backgroundColor: '#fc5185' }
                }
                className='portfolio-container d-flex justify-content-center shadow-lg rounded m-3 m-md-2 '
                key={v1()}>
                <form key={v1()}>
                  <div className='task-file-container d-flex justify-content-center align-items-center'>
                    <img key={v1()} src={task.files.task0} alt='task' />
                  </div>
                  <div>
                    <h2 className='card-title'>{task.title}</h2>
                    <div className='card-status d-flex justify-content-around'>
                      <p>Estatus: {task.status}</p>
                      <p>Calificacion: {task.calification}</p>
                    </div>
                    {task.status === 'Pendiente' && (
                      <button
                        className='btn-task-file mb-2'
                        onClick={() => {
                          setActualTask(task);
                          setSelectedTaskFiles(task.files);
                          setOpenTaskModal(true);
                          setSelectedTaskTitle(task.title);
                        }}>
                        Calificar
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ))
          )}
        </div>
        <ModalTask
          task={actualTask}
          isOpen={openTaskModal}
          close={() => setOpenTaskModal(false)}
          files={selectedTaskFiles}
          title={selectedTaskTitle}
        />
      </article>
    </section>
  );
};

const mapStateToProps = (state) => ({
  students: state.groups.currentGroup.students,
  assignments: state.groups.currentGroup.assignments,
  homework: state.homework.student_homework,
  message: state.homework.message,
});

const mapDispatchToProps = {
  getStudentHomework,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPortfolio);
