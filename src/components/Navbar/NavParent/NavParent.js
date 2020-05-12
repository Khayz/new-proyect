import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/index.actions';
import { connect } from 'react-redux';

const NavParent = ({ activeLink, user, logoutUser }) => {
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
						<li className='nav-item dropdown'>
							<NavLink
								className='nav-link dropdown-toggle'
								to='/'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								{user.firstName + ' ' + user.lastName}
								<i
									style={{
										color: '#00aeef',
										fontSize: '25px',
										border: 'none',
										marginLeft: '5px',
									}}
									className='fas fa-user-circle'></i>
							</NavLink>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<NavLink
									exact
									activeStyle={activeLink}
									className='dropdown-item'
									to='/settings'>
									Configuraciones
								</NavLink>
								<NavLink
									exact
									activeStyle={activeLink}
									className='dropdown-item'
									to='/settings'>
									Calificaciones
								</NavLink>
								<NavLink
									onClick={logoutUser}
									exact
									activeStyle={activeLink}
									className='dropdown-item'
									to='/'>
									Cerrar Sesion
								</NavLink>
							</div>
						</li>
					</ul>

					<button
						style={{
							color: '#00aeef',
							fontSize: '22px',
							border: 'none',
							background: 'transparent',
							outline: 'none',
							marginRight: '50px',
						}}
						className='fas fa-bell'></button>
				</div>
			</nav>
		</header>
	);
};

const mapDispatchToProps = {
	logoutUser,
};

export default connect(null, mapDispatchToProps)(NavParent);
