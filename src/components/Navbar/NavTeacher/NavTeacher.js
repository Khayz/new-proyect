import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/index.actions';
import { connect } from 'react-redux';

const NavTeacher = ({ activeLink, user, logoutUser }) => {
	return (
		<header className='header'>
			<nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
				<NavLink className='navbar-brand' to='/'>
					<i className='far fa-address-book'></i> Home School
				</NavLink>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item '>
							<NavLink onClick={logoutUser} className='nav-link' to='/'>
								Cerrar Sesión
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

const mapDispatchToProps = {
	logoutUser,
};

export default connect(null, mapDispatchToProps)(NavTeacher);
