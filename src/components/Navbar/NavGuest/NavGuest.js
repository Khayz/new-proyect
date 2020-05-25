import React from 'react';
import { NavLink } from 'react-router-dom';

const NavGuest = () => {
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
						<li className='nav-item'>
							<NavLink className='nav-link' to='/login'>
								Iniciar Sesión
							</NavLink>
						</li>
						<li className='nav-item dropdown'>
							<NavLink
								className='nav-link dropdown-toggle'
								to='/'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Darse de alta
							</NavLink>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<NavLink
									style={{ color: '#000' }}
									className='dropdown-item'
									to='/register/teacher'>
									Profesor
								</NavLink>
								<NavLink
									style={{ color: '#000' }}
									className='dropdown-item'
									to='/register/parent'>
									Padre
								</NavLink>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavGuest;
