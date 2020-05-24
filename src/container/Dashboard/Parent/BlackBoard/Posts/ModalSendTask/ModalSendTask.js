import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './ModalSendTask.scss';
import { sendTask } from '../../../../../../redux/actions/teacher.action';

const ModalClass = ({ close, child, task, sendTask }) => {
	const [files, setFiles] = useState({
		task0: '',
		task1: '',
		task2: '',
		task3: '',
		task4: '',
	});

	const [inputs, setInputes] = useState([1]);

	const handleSubmitGroup = (event) => {
		event.preventDefault();
		sendTask({
			files,
			title: task.title,
			date: new Date().toLocaleDateString(),
			studentID: child._id,
			teacherID: task.teacherID,
			calification: '',
			status: 'Pendiente',
			groupPostID: task._id,
			groupID: child.groupID,
		});
	};

	const handleFiles = (event) => {
		const { name } = event.target;
		const theFile = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(theFile);
		reader.onloadend = () => {
			setFiles((prevState) => ({
				...prevState,
				[name]: reader.result,
			}));
		};
	};

	return ReactDOM.createPortal(
		<div className='modal_send_task'>
			<form className='modal_form'>
				<div className='form_title'>
					<h2>Enviar Tarea</h2>
					<i onClick={() => close(false)} className='fas fa-times-circle'></i>
				</div>
				{inputs.map((task, index) => (
					<input
						key={task}
						type='file'
						name={`task${index}`}
						onChange={handleFiles}
						placeholder='file*'
						accept='image/*'
						id='upload-file'
					/>
				))}
				{inputs.length < 5 && (
					<button
						type='button'
						onClick={() => {
							inputs.length < 5 &&
								setInputes((prevState) => [
									...prevState,
									inputs[inputs.length - 1] + 1,
								]);
						}}>
						Añadir Tarea
					</button>
				)}
				<button onClick={handleSubmitGroup}>Enviar</button>
			</form>
		</div>,
		document.getElementById('modal')
	);
};

const mapStateToProps = (state) => ({
	child: state.childs.actualChild,
});

const mapDispatchToProps = {
	sendTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalClass);
