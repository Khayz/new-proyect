import React from 'react';
import { v1 } from 'uuid';
import { connect } from 'react-redux';

import './ChildTasks.scss';

import Spinner from '../../../../../components/Ui/Spinner/Spinner';

const ChildTasks = ({ homework, isLoading }) => {
	return (
		<section className='ChildTasks'>
			{isLoading ? (
				<article className='loading_homework'>
					<Spinner />
				</article>
			) : (
				homework.map((task) => (
					<div
						key={v1()}
						className={`Task card text-white ${
							task.status === 'Entregada' ? 'bg-success' : 'bg-warning'
						} mb-3`}
						style={{ maxWidth: '18rem' }}>
						<div className='card-header'>{`${
							task.status === 'Entregada' ? 'Entregada' : 'Pendiente'
						}`}</div>
						<div className='card-body'>
							<h5 className='card-title'>Titulo: {task.title}</h5>
							<p className='card-text'>
								Calificacion: {task.calification || 'none'}
							</p>
							<p className='card-text'>Fecha: {task.date}</p>
							<p>Estatus: {task.status}</p>
						</div>
					</div>
				))
			)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	homework: state.homework.homework,
	isLoading: state.homework.loading,
});

export default connect(mapStateToProps)(ChildTasks);
