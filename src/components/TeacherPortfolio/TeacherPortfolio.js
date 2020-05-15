import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v1 } from 'uuid';

import './TeacherPortfolio.scss';

import ModalAssignment from './ModalAssignment/ModalAssignment';

const TeacherPortfolio = ({ students, assignments, user }) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<section className='Teacher-Portfolio'>
			<div className='sideBoard-activities'>
				<article>
					<h2>Todos los envios</h2>
				</article>
				<hr />
				<article>
					<h2>Asignaturas</h2>
					<button onClick={() => setOpenModal(true)}>Añadir Asignatura</button>
					{assignments.map((assignment) => (
						<h4 key={v1()}>{assignment}</h4>
					))}
					{openModal && <ModalAssignment close={setOpenModal} />}
				</article>
				<hr />
				<article className='name-students'>
					<h2>Estudiantes</h2>
					{students.map((student) => (
						<h4 key={v1()}>{student.firstName}</h4>
					))}
				</article>
			</div>
			<article className='portfolio-info'>
				<h2>Bienvenido a tus portafolios</h2>
				<p>
					Un lugar para completar las actividades y compartirlas a tus
					estudiantes y sus padres.
				</p>
				{user.tasks.map((task) => {
					return (
						<form key={v1()}>
							<h1>{task.title}</h1>
							<figure>
								{Object.keys(task.files)
									.filter((file) => task.files[file])
									.map((file) => (
										<img key={v1()} src={task.files[file]} alt='task' />
									))}
							</figure>
							<input type='number' placeholder='Calificacion*' />
							<select>
								<option>Pendiente</option>
								<option>Resuelta</option>
							</select>
							<button>Enviar</button>
						</form>
					);
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
