import React, { useState } from 'react';
import { registerUser } from '../../../redux/actions/index.actions';
import { connect } from 'react-redux';

function SignUpParent({ registerUser }) {
	const [register, setRegister] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		phone: '',
		childs: [],
		account: 'parent',
	});

	const handleRegisterData = (event) => {
		const { value, name } = event.target;
		setRegister((prevProps) => ({
			...prevProps,
			[name]: value,
		}));
	};

	const handleSubmitRegister = (event) => {
		event.preventDefault();
		registerUser(register);
	};

	return (
		<form
			onSubmit={handleSubmitRegister}
			className='Register text-center border border-light p-5'
			action='#!'>
			<p className='h4 mb-4'>Sign up parent</p>

			<div className='form-row mb-4'>
				<div className='col'>
					<input
						onChange={handleRegisterData}
						type='text'
						name='firstName'
						id='defaultRegisterFormFirstName'
						className='form-control'
						placeholder='First name'
					/>
				</div>
				<div className='col'>
					<input
						onChange={handleRegisterData}
						type='text'
						name='lastName'
						id='defaultRegisterFormLastName'
						className='form-control'
						placeholder='Last name'
					/>
				</div>
			</div>

			<input
				onChange={handleRegisterData}
				type='email'
				name='email'
				id='defaultRegisterFormEmail'
				className='form-control mb-4'
				placeholder='E-mail'
			/>

			<input
				onChange={handleRegisterData}
				type='password'
				name='password'
				id='defaultRegisterFormPassword'
				className='form-control'
				placeholder='Password'
				aria-describedby='defaultRegisterFormPasswordHelpBlock'
			/>
			<small
				id='defaultRegisterFormPasswordHelpBlock'
				className='form-text text-muted mb-4'>
				At least 8 characters and 1 digit
			</small>

			<input
				onChange={handleRegisterData}
				type='text'
				name='phone'
				id='defaultRegisterPhonePassword'
				className='form-control'
				placeholder='Phone number'
				aria-describedby='defaultRegisterFormPhoneHelpBlock'
			/>
			<small
				id='defaultRegisterFormPhoneHelpBlock'
				className='form-text text-muted mb-4'></small>

			<button className='btn btn-info my-4 btn-block'>Sign in</button>

			<p>or sign up with:</p>

			<a href='/' className='mx-2' role='button'>
				<i className='fab fa-facebook-f light-blue-text'></i>
			</a>
			<a href='/' className='mx-2' role='button'>
				<i className='fab fa-twitter light-blue-text'></i>
			</a>
			<a href='/' className='mx-2' role='button'>
				<i className='fab fa-linkedin-in light-blue-text'></i>
			</a>
			<a href='/' className='mx-2' role='button'>
				<i className='fab fa-github light-blue-text'></i>
			</a>

			<hr />

			<p>
				By clicking
				<em>Sign up</em> you agree to our
				<a href='/' target='_blank'>
					terms of service
				</a>
			</p>
		</form>
	);
}

const mapDispatchToProps = {
	registerUser,
};

export default connect(null, mapDispatchToProps)(SignUpParent);
