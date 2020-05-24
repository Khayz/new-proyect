import React from 'react';
import { connect } from 'react-redux';

import './Settings.scss';

import SettingChild from './SettingChilds/SettingChild';

const Settings = ({ user }) => {
	return (
		<div className='settings'>
			<SettingChild />
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(Settings);
