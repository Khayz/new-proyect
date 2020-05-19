import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { updateHomework } from '../../../../redux/actions/index.actions';

import './FirmStudentTask.scss';
const FirmStudentTask = ({ close, id, updateHomework, user }) => {
	const [homeWork, setHomeWork] = useState({
		calification: '',
		status: 'Pendiente',
	});

	const handleHomeWork = (event) => {
		const { name, value } = event.target;
		setHomeWork((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmitHomeWork = (event) => {
		event.preventDefault();
		updateHomework(id, homeWork, user._id);
		close(false);
		setHomeWork({});
	};

	return ReactDOM.createPortal(
		<div className='modal_firm_task'>
			<form className='modal_form'>
				<input
					onChange={handleHomeWork}
					name='calification'
					type='text'
					value={homeWork.calification}
					placeholder='Calificacion*'
					required
				/>
				<select value={homeWork.status} name='status' onChange={handleHomeWork}>
					<option>Pendiente</option>
					<option>Entregada</option>
				</select>
				<button onClick={handleSubmitHomeWork}>Enviar</button>
			</form>
		</div>,
		document.getElementById('modal')
	);
};

const mapDispatchToProps = {
	updateHomework,
};

export default connect(null, mapDispatchToProps)(FirmStudentTask);
