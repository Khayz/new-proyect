import React from 'react';
import { v1 } from 'uuid';

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
		<section className='Student-List'>
			{studers.map((students) => (
				<div key={v1()} className='Student-Card'>
					<figure>
						<img src={Monster} alt='' />
					</figure>
					<h3>{students.name}</h3>
				</div>
			))}
			<div style={{ border: `dashed 1px #ccc` }} className='Student-Card'>
				<h3>Invitar Estudiante</h3>
				<i
					style={{ color: 'blue', fontSize: '34px' }}
					className='fas fa-plus-circle'></i>
			</div>
		</section>
	);
};

export default Students;
