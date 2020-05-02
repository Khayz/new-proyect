import React from 'react';
import { NavLink } from 'react-router-dom';
const NavTeacher = ({ activeLink }) => {
	return (
		<header className='header'>
			<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
				<NavLink className='navbar-brand' to='/' exact activeStyle={activeLink}>
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
							<NavLink
								className='nav-link'
								to='/d'
								exact
								activeStyle={activeLink}>
								Contacto
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='nav-link'
								to='/login'
								exact
								activeStyle={activeLink}>
								Iniciar Sesion
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
									exact
									activeStyle={activeLink}
									className='dropdown-item'
									to='/register/teacher'>
									Profesor
								</NavLink>
								<NavLink
									exact
									activeStyle={activeLink}
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

export default NavTeacher;
