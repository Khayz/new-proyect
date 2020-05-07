import React from 'react';
import { connect } from 'react-redux';
import { v1 } from 'uuid';

import Kid from '../../../Assets/Images/kid-icon.svg';

import './SettingChilds.scss';
import EditChildModal from './EditChildModal/EditChildModal';
import DeleteChildModal from './DeleteChildModal/DeleteChildModal';

const SettingChild = ({ childs }) => {
	return (
		<div className='settings-childs'>
			<i className='fas fa-user'></i>
			<h2>Hijos</h2>
			{childs.length > 0 ? (
				<div className='settings-list-child'>
					{childs.map((child, i) => {
						return (
							<div key={i} className='card'>
								<img className='card-img-top' src={Kid} alt='Card cap' />
								<div className='card-body'>
									<h4 className='card-title'>
										{child.firstName} {child.lastName}
									</h4>
									<p className='card-text'>
										Podras editar, eliminar o ver el progreso de cada
										estudiante.
										<br />
										<span>Grupo: {child.group}</span>
									</p>
									<div className='btn'>
										<EditChildModal child={child} />
										<DeleteChildModal />
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
