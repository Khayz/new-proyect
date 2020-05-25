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

					{students.map((student) => (
						<p
							onClick={() => handleActualHomework(student)}
							className='d-flex justify-content-between align-items-center mb-3'
							name='hello'
							value={student.firstName}
							key={v1()}>
							{student.firstName}
						</p>
					))}
				</div>
				<div className='portfolio-info d-flex justify-content-center flex-wrap px-3 mb-5'>
					{message !== null ? (
						<p>{message}</p>
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
										<h2 className='card-title'>{task.title}</h2>
										<p>Estatus: {task.status}</p>
										<p>Calificacion: {task.calification}</p>
										{task.status === 'Pendiente' && (
											<button
												className='btn-task-file m-2'
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
