import React, { useState } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

const SettinsTeacher = ({ groupID }) => {
	const [teacher, setTeacher] = useState('');

	const handleTeacher = (event) => {
		const { value } = event.target;
		setTeacher(value);
	};

	const handleSubmitAddTeacher = async (event) => {
		event.preventDefault();
		await Axios.post('http://localhost:4000/new-teacher-group', {
			teacherEmail: teacher,
			groupID,
		});
	};

	return (
		<section>
			<h1>Teacher Settings</h1>
			<form onSubmit={handleSubmitAddTeacher}>
				<h2>Añadir profesor al grupo</h2>
				<input
					value={teacher}
					onChange={handleTeacher}
					type='text'
					placeholder='Email*'
				/>
				<button>Añadir</button>
			</form>
		</section>
	);
};

const mapStateToProps = (state) => ({
	groupID: state.group.actualGroup._id,
});

export default connect(mapStateToProps)(SettinsTeacher);
