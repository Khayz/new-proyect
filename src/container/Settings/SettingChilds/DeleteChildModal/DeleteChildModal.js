import React from 'react';

const DeleteChildModal = (props) => {
	return (
		<div>
			<button
				type='button'
				className='btn btn-danger'
				data-toggle='modal'
				data-target='#modalConfirmDelete'>
				eliminar
			</button>

			<div
				className='modal fade'
				id='modalConfirmDelete'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div
					className='modal-dialog modal-sm modal-notify modal-danger'
					role='document'>
					<div className='modal-content text-center'>
						<div className='modal-header d-flex justify-content-center'>
							<p className='heading'>Estas Seguro</p>
						</div>

						<div className='modal-body'>
							Estas seguro que deseas borrarlo?, se borrara toda la informacion
							relacionada a el y todas las tareas, no habra manera de
							recuperarlo!
						</div>

						<div className='modal-footer flex-center'>
							<button to='/' className='btn  btn-outline-danger'>
								Elminar
							</button>
							<button
								type='button'
								style={{ color: '#fff' }}
								className='btn btn-danger waves-effect'
								data-dismiss='modal'>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteChildModal;
