import React from 'react';
import './TeacherPortfolio.scss';

import './TeacherPortfolio.scss';
import { connect } from 'react-redux';
const TeacherPortfolio = ({ students }) => {
	return (
		<section className='Teacher-Portfolio'>
			<div className='sideBoard-activities'>
				<article>
					<h3>Todos los envios</h3>
				</article>
				<hr />
				<article className='name-students'>
					<h2>Estudiantes</h2>
					{students.map((student) => (
						<h4>{student.firstName}</h4>
					))}
				</article>
			</div>
			<article className='portfolio-info'>
				<h2>Bienvenido a tus portafolios</h2>
				<p>
					Un lugar para completar las actividades y compartirlas a tus
					estudiantes y sus padres.
				</p>
			</article>
		</section>
	);
};

const mapStateToProps = (state) => ({
	students: state.groups.currentGroup.students,
});

export default connect(mapStateToProps)(TeacherPortfolio);
