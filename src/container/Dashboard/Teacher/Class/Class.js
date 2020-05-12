import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Class.scss';
import Students from './Students/Students';
import TeacherPortfolio from '../../../../components/TeacherPortfolio/TeacherPortfolio';
import NavContent from './NavContent/NavContent';

const Class = ({ match }) => {
	return (
		<>
			<NavContent match={match} />
			<section>
				<Switch>
					<Route path={`${match.url}/classroom`} component={Students} />
					<Route path={`${match.url}/portfolio`} component={TeacherPortfolio} />
				</Switch>
			</section>
		</>
	);
};

export default Class;
