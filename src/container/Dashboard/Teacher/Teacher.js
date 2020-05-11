import React from 'react';
import './Teacher.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Teacher = ({ user }) => {
	return (
		<section className='dashboard-teacher'>
			<article className='class-cards'>
				<Link to='/demo-class' className='TeacherCards'>
					<h2>Clase Demo</h2>
					<i className='fas fa-book'></i>
				</Link>
				<Link to='/' className='TeacherCards'>
					<h2>Crear Clase</h2>
					<i className='fas fa-plus-circle'></i>
				</Link>
			</article>
			<article className='sideboard-teacher'>
				<i className='fas fa-user-circle'></i>
				<h2>
					Profesor: <span>{user.firstName}</span>{' '}
				</h2>
				<p>
					Escuela: <span>Benito Juarez, 219</span>{' '}
				</p>
				<hr />
				<i className='fas fa-school'></i>
				<h2>Benito Juarez, 219</h2>
				<p>
					Tu escuela no tiene profesor de nuestra app <span>HOME-SCHOOL</span>{' '}
					todavia, verificalo aqui. Manda un email para ayudarte.
				</p>
				<button>Cambiar escuela</button>
				<hr />
				<div>
					<h2>Aprendizaje Remoto con HOME-SCHOOL</h2>
					<p>
						Todo lo que tu nececitas para estar conectado con los estudiantes y
						sus familiares, donde quieran que esten.
					</p>
				</div>
				<hr />
				<div>
					<h2>Grandes Ideas</h2>
					<p>
						Grandes actividades para ayudar a los estudiantes a administrar sus
						trabajos.
					</p>
				</div>
				<button>Ver todos los recursos</button>
			</article>
		</section>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(Teacher);
