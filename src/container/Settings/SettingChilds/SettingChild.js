import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v1 } from 'uuid';

import Kid from '../../../Assets/Images/kid-icon.svg';

import './SettingChilds.scss';

const SettingChild = ({ childs }) => {
	return (
		<div className='settings-childs'>
			<i className='fas fa-user'></i>
			<h2>Hijos</h2>
			{childs.length > 0 ? (
				<div className='settings-list-child'>
					{childs.map((ch, i) => {
						return (
							<div key={i} className='card'>
								<img className='card-img-top' src={Kid} alt='Card cap' />
								<div className='card-body'>
									<h5 className='card-title'>{ch.firstName}</h5>
									<p className='card-text'>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</p>
									<div className='btn'>
										<Link to='/' className='btn btn-primary'>
											Editar
										</Link>
										<Link to='/' className='btn btn-danger'>
											Eliminar
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<p>No hay estudiantes</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	childs: state.childs.childList,
});

export default connect(mapStateToProps)(SettingChild);

v1();
