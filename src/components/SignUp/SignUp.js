import React from 'react';
import SignUpParent from './SignUpParent/SignUpParent';
import SignUpTeacher from './SignUpTeacher/SignUpTeacher';

import './SignUp.scss';

const SignUp = (props) => {
	let Register = null;

	const {
		match: {
			params: { account },
		},
	} = props;

	if (account === 'teacher') {
		Register = <SignUpTeacher />;
	} else if (account === 'parent') {
		Register = <SignUpParent />;
	}

	return <div>{Register}</div>;
};

export default SignUp;
