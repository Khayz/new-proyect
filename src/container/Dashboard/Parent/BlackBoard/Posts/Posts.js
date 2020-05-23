import React, { useState } from 'react';
import { v1 } from 'uuid';

import './Posts.scss';

import ModalSendTask from './ModalSendTask/ModalSendTask';
import { useEffect } from 'react';

const BoardContent = ({ posts, homework }) => {
	const [openModal, setOpenModal] = useState(false);
	const [task, setTask] = useState(null);

	const [newPosts, setNewPosts] = useState([]);

	useEffect(() => {
		const newposts = [];
		let contador = 0;
		for (const post in posts) {
			for (const work in homework) {
				if (homework[work].groupPostID === posts[post]._id) {
					newposts.push({ ...posts[post], status: homework[work].status });
					contador++;
				}
			}

			if (contador === 0) {
				newposts.push(posts[post]);
			}

			contador = 0;
		}

		setNewPosts(newposts);
	}, [posts, homework]);

	return (
		<div className='Posts'>
			{newPosts.length > 0 &&
				newPosts.map((post) => (
					<div
						key={v1()}
						className={`Posts-Post ${
							post.status === 'Pendiente'
								? 'HomeWork_pending'
								: post.status === 'Entregada'
								? 'HomeWork_success'
								: null
						}`}>
						<h2>{post.title}</h2>
						<p>
							Descripcion: <span>{post.description}</span>
						</p>
						<p>
							Fecha de entrega: <span>{post.dueDate}</span>
						</p>
						{!post.status && (
							<button
								onClick={() => {
									setTask(post);
									setOpenModal(true);
								}}>
								Entregar
							</button>
						)}
					</div>
				))}
			{openModal && <ModalSendTask close={setOpenModal} task={task} />}
		</div>
	);
};

export default BoardContent;
