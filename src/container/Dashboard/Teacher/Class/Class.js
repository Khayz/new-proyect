import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Class.scss';
import Students from './Students/Students';
import TeacherPortfolio from '../../../../components/TeacherPortfolio/TeacherPortfolio';
import NavContent from './NavContent/NavContent';
import TeacherPost from '../../../../components/TeacherPost/TeacherPost';

const Class = ({ match }) => {
	return (
		<>
			<NavContent match={match} />
			<section>
				<Switch>
					<Route path={`${match.url}/classroom`} component={Students} />
					<Route path={`${match.url}/portfolio`} component={TeacherPortfolio} />
					<Route path={`${match.url}/posts`} component={TeacherPost} />
				</Switch>
			</section>
		</>
	);
};

export default Class;
