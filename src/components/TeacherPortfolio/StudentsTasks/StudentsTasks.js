import React, { useState } from 'react';
import { v1 } from 'uuid';
import FirmStudentTask from './FirmStudenTask/FirmStudentTask';

const StudentsTasks = ({ user }) => {
	const [openModal, setOpenModal] = useState(false);

	return user.tasks.map((task) => {
		console.log(task.status);
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
				{task.status === 'Pendiente' && (
					<button onClick={() => setOpenModal(true)}>Calificar</button>
				)}
				{openModal && (
					<FirmStudentTask user={user} id={task._id} close={setOpenModal} />
				)}
			</form>
		);
	});
};

export default StudentsTasks;
