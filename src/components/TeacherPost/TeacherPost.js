import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setNewTask } from '../../redux/actions/index.actions';

import Tmonster from './../../Assets/Images/monstert.svg';
import './TeacherPost.scss';

const TeacherPost = ({ assignments, groupID, setNewTask }) => {
	const [post, setPost] = useState({
		title: '',
		description: '',
		dueDate: new Date().toLocaleDateString(),
		teacherID: JSON.parse(localStorage.getItem('user'))._id,
		groupID,
		assignment: assignments[0],
	});

	const handlePostData = (event) => {
		const { value, name } = event.target;
		setPost((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmitPost = (event) => {
		event.preventDefault();
		console.log(post);
		setNewTask(post);
	};

	return (
		<section className='Post'>
			<article className='post-events'>
				<h3>Eventos proximos</h3>
				<hr />
				<p>No hay eventos proximos</p>
			</article>
			<div className='post-cards'>
				<article className='post-info'>
					<figure>
						<img src={Tmonster} alt='' />
					</figure>
					<h2>Bienvenido a tus publicaciones</h2>
					<p>
						Tus publicaciones son la manera mas facil de compartir a tu
						classroom las actualizaciones de cada tarea
					</p>
				</article>
				<form onSubmit={handleSubmitPost} className='teacher-post'>
					<i className='fas fa-user-circle'></i>
					<input
						onChange={handlePostData}
						name='title'
						value={post.title}
						type='text'
						placeholder='Titulo*'
						required
					/>
					<textarea
						onChange={handlePostData}
						value={post.description}
						name='description'
						maxLength='300'
						placeholder='Que pasa en tu classroom?*'
						type='text'
						required
					/>
					<hr />
					<h2>Materia</h2>
					<select required onChange={handlePostData}>
						{assignments.map((assignment) => (
							<option key={assignment} name='assignment' value={assignment}>
								{assignment}
							</option>
						))}
					</select>
					<button className='btn btn-primary'>Publicar</button>
				</form>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	assignments: state.groups.currentGroup.assignments,
	groupID: state.groups.currentGroup._id,
});

const mapDispatchToProps = {
	setNewTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPost);
