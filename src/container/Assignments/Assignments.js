import React from 'react';

const Assignments = () => {
	const morriyos = [
		{ materia: 'Español' },
		{ materia: 'deportes' },
		{ materia: 'historia' },
		{ materia: 'matematicas' },
		{ materia: 'ciencias' },
	];

	return (
		<div>
			<h1>Calificaciones</h1>
			{morriyos.map((morriyo) => (
				<div className='childCard'>
					<h2>{morriyo.materia}</h2>
					<button>Ver Calificaciones</button>
				</div>
			))}
		</div>
	);
};

export default Assignments;
