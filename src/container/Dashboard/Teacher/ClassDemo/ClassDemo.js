import React from 'react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import './ClassDemo.scss';
import DemoStudents from './DemoStudents/DemoStudents';
import TeacherPortfolio from '../../../../components/TeacherPortfolio/TeacherPortfolio';

const ClassDemo = ({ match }) => {
	return (
		<section>
			<nav className='navLinks'>
				<ul className='student-content'>
					<li>
						<NavLink
							activeStyle={{ color: '#333333' }}
							to={`${match.url}/classroom`}>
							<h4>Classroom</h4>
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={{ color: '#333333' }}
							to={`${match.url}/portfolio`}>
							<h4>Portafolio</h4>
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={{ color: '#333333' }} to='/messages'>
							<h4>Mensajes</h4>
						</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				<Switch>
					<Route path={`${match.url}/classroom`} component={DemoStudents} />
					<Route path={`${match.url}/portfolio`} component={TeacherPortfolio} />
				</Switch>
			</div>
		</section>
	);
};

export default ClassDemo;
