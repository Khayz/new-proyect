import React, { useState } from 'react';
import { connect, useStore } from 'react-redux';
import { v1 } from 'uuid';

import './TeacherPortfolio.scss';

import ModalAssignment from './ModalAssignment/ModalAssignment';

const TeacherPortfolio = ({ students, assignments, user }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className='Teacher-Portfolio'>
      <div className='sideBoard-activities'>
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
              <div className='assignment d-flex justify-content-between'>
                <i class='fas fa-book-open mr-2'></i>
                <h4 key={v1()}>{assignment}</h4>
              </div>
            ))}
          </div>

          {openModal && <ModalAssignment close={setOpenModal} />}
        </article>
        <hr />
        <article className='name-students d-flex flex-column justify-content-center'>
          <h2 className='mb-3'>Estudiantes</h2>

          {students.map((student) => (
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <i class='fas fa-user-graduate'></i>
              <h4 key={v1()}>{student.firstName}</h4>
            </div>
          ))}
        </article>
      </div>
      <article className='portfolio-info d-flex flex-wrap p-5'>
        {user.tasks.map((task) => {
          console.log(task);
          if (!user.tasks.length == 0) {
            return (
              <div class='portfolio-container d-flex justify-content-center shadow-lg rounded m-3  '>
                <form key={v1()}>
                  <div className='task-file-container d-flex justify-content-center align-items-center'>
                    {Object.keys(task.files)
                      .filter((file) => task.files[file])
                      .map((file) => (
                        <img key={v1()} src={task.files[file]} alt='task' />
                      ))}
                  </div>
                  <div className='card-body '>
                    <h5 className='card-title'>{task.title}</h5>
                    <div className='card-content d-flex flex-wrap justify-content-around'>
                      <input type='number' placeholder='Calificacion*' />
                      <select>
                        <option>Pendiente</option>
                        <option>Resuelta</option>
                      </select>
                      <button className='btn btn-primary m-2'>Enviar</button>
                    </div>
                  </div>
                </form>
              </div>
            );
          }

          if (user.tasks.length == 0) {
            return (
              <div>
                <h2>Bienvenido a tus portafolios</h2>
                <p>
                  Un lugar para completar las actividades y compartirlas a tus
                  estudiantes y sus padres.
                </p>
              </div>
            );
          }
        })}
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
