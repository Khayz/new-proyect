import React from 'react';
import Board from './Board/Board';
import Childs from './Childs/Childs';
import BlackBoard from './BlackBoard/BlackBoard';

import './Dashboard.scss';

const Dashboard = () => {
	return (
		<div className='Dashboard'>
			<div className='side'>
				<Childs />
				<Board />
			</div>
			<BlackBoard />
		</div>
	);
};

export default Dashboard;
