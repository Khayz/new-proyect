import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
	const activeLink = {
		backgroundColor: '#00aeef',
		color: '#fff',
		padding: '7px',
		borderRadius: '5px',
		fontWeight: 'normal',
	};

	return (
		<header className='header'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
								to='/s'
								exact
								activeStyle={activeLink}>
								Aprenda mas
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='nav-link'
								to='/d'
								exact
								activeStyle={activeLink}>
								Contacto
							</NavLink>
						</li>
						{/* <li className='nav-item dropdown'>
							<NavLink
								className='nav-link dropdown-toggle'
								to='/'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Dropdown
							</NavLink>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<NavLink className='dropdown-item' to='/'>
									Action
								</NavLink>
								<NavLink className='dropdown-item' to='/'>
									Another action
								</NavLink>
								<div className='dropdown-divider'></div>
								<NavLink className='dropdown-item' to='/'>
									Something else here
								</NavLink>
							</div>
						</li> */}
						<li className='nav-item'>
							<NavLink
								className='nav-link'
								to='/q'
								exact
								activeStyle={activeLink}>
								Darse de alta
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
