import React, { useState } from 'react';
import { v1 } from 'uuid';

import styles from './Posts.module.scss';

import ModalSendTask from './ModalSendTask/ModalSendTask';

const BoardContent = ({ posts }) => {
	const [openModal, setOpenModal] = useState(false);
	const [task, setTask] = useState(null);

	return (
		<div className={styles.Posts}>
			{posts.map((post) => (
				<div key={v1()} className={styles.Post}>
					<h2>{post.title}</h2>
					<p>
						Descripcion: <span>{post.description}</span>
					</p>
					<p>
						Fecha de entrega: <span>{post.dueDate}</span>
					</p>
					<button
						onClick={() => {
							setTask(post);
							setOpenModal(true);
						}}>
						Entregar
					</button>
				</div>
			))}
			{openModal && <ModalSendTask close={setOpenModal} task={task} />}
		</div>
	);
};

export default BoardContent;
