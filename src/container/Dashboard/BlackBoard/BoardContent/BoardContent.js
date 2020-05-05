import React from 'react';
import { v1 } from 'uuid';

import './BoardContent.scss';

const BoardContent = ({ posts }) => {
	return (
		<div className='BoardContent'>
			{posts.map((post) => (
				<div key={v1()} className='post'>
					<h2>Tarea: {post.title}</h2>
					<p>Descripcion: {post.description}</p>
					<p>Fecha de entrega: {new Date(post.dueDate).toDateString()}</p>
					<button className='btn btn-primary'>Entregar</button>
				</div>
			))}
		</div>
	);
};

export default BoardContent;
