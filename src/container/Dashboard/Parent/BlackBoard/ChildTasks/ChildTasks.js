import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v1 } from 'uuid';
import { getHomework } from '../../../../../redux/actions/homework.action';

import './ChildTasks.scss';

import Spinner from '../../../../../components/Ui/Spinner/Spinner';

const ChildTasks = ({ child, homework, getHomework, isLoading }) => {
	useEffect(() => {
		getHomework(child._id);
	}, [getHomework, child]);

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
	child: state.childs.actualChild,
	isLoading: state.homework.loading,
});

const mapDispatchToProps = {
	getHomework,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildTasks);

/* <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
