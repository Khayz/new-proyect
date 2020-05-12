import React from 'react';

import Monster from '../../../../../Assets/Images/avatar.svg';

import './Students.scss';

const Students = () => {
	const studers = [
		{
			name: 'Mario',
		},
		{
			name: 'Willy',
		},
		{
			name: 'Jordi',
		},
		{
			name: 'Rebecca',
		},
		{
			name: 'Ricardo',
		},
	];

	return (
		<div className='Student-List'>
			{studers.map((students) => (
				<div className='Student-Card'>
					<figure>
						<img src={Monster} alt='' />
					</figure>
					<h3>{students.name}</h3>
				</div>
			))}
			<div style={{ border: `dashed 1px #ccc` }} className='Student-Card'>
				<h3>Añadir estudiante</h3>
				<i
					style={{ color: 'blue', fontSize: '34px' }}
					className='fas fa-plus-circle'></i>
			</div>
		</div>
	);
};

export default Students;
