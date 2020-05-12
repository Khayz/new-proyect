import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavContent.scss';
const NavContent = ({ match }) => {
	return (
		<nav className='NavContent'>
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
	);
};

export default NavContent;
