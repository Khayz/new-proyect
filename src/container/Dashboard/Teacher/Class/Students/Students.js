import React, { useState } from 'react';
import { v1 } from 'uuid';

import Monster from '../../../../../Assets/Images/avatar.svg';
import './Students.scss';

import ModalInviteStudent from './ModalInviteStudent/ModalInviteStudent';
import { connect } from 'react-redux';

const Students = ({ students }) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<section className='Student-List'>
			{students.map((students) => (
				<div key={v1()} className='Student-Card'>
					<figure>
						<img src={Monster} alt='' />
					</figure>
					<h3>{students.firstName}</h3>
				</div>
			))}
			<div
				onClick={() => setOpenModal(true)}
				style={{ border: `dashed 1px #ccc` }}
				className='Student-Card'>
				<h3>Invitar Estudiante</h3>
				<i
					style={{ color: 'blue', fontSize: '34px' }}
					className='fas fa-plus-circle'></i>
			</div>
			{openModal && <ModalInviteStudent close={setOpenModal} />}
		</section>
	);
};

const mapStateToProps = (state) => ({
	students: state.groups.currentGroup.students,
});
export default connect(mapStateToProps)(Students);
