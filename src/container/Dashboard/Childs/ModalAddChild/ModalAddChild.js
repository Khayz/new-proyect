import React, { useState } from 'react';
import { addChild } from '../../../../redux/actions/index.actions';

import './ModalAddChild.scss';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const ModalAddChild = ({ parentID, addChild }) => {
	const [child, setChild] = useState({
		firstName: '',
		lastName: '',
		parentID: parentID,
		groupID: '',
		group: '',
		school: '',
		assignments: [],
	});

	const handleChildData = (event) => {
		const { name, value } = event.target;
		setChild((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmitChild = async (event) => {
		event.preventDefault();
		await addChild(child);
		await setChild({
			firstName: '',
			lastName: '',
			parentID: parentID,
			groupID: '',
			group: '',
			school: '',
			assignments: [],
		});
		toast.info('Child Created!');
	};

	return (
		<>
			<div
				className='modal fade'
				id='modalRegisterForm'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='myModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog' role='document'>
					<div className='ModalChild modal-content'>
						<div className='modal-header text-center'>
							<h4 className='modal-title w-100 font-weight-bold'>Añadir</h4>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<form
							onSubmit={handleSubmitChild}
							className='ModalRegister text-center border border-light p-5'
							action='#!'>
							<div className='form-row mb-4'>
								<div className='col'>
									<input
										onChange={handleChildData}
										type='text'
										name='firstName'
										id='defaultRegisterFormFirstName'
										className='form-control'
										placeholder='First name'
										required
									/>
								</div>
								<div className='col'>
									<input
										onChange={handleChildData}
										type='text'
										name='lastName'
										id='defaultRegisterFormLastName'
										className='form-control'
										placeholder='Last name'
										required
									/>
								</div>
							</div>

							<input
								onChange={handleChildData}
								type='text'
								name='groupID'
								id='defaultRegisterFormEmail'
								className='form-control mb-4'
								placeholder='Group'
							/>

							<button className='btn btn-info my-4 btn-block'>Añadir</button>
							<button
								data-dismiss='modal'
								aria-label='Close'
								className='btn btn-info my-4 btn-block'>
								Cerrar
							</button>
						</form>
					</div>
				</div>
			</div>

			<div className='text-center'>
				<i
					data-toggle='modal'
					data-target='#modalRegisterForm'
					className='fas fa-plus-circle'></i>
			</div>
		</>
	);
};

const mapDispatchToProps = {
	addChild,
};

export default connect(null, mapDispatchToProps)(ModalAddChild);
