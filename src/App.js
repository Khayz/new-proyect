import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { authUser, getChilds } from './redux/actions/index.actions';
import {} from 'react-toastify';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import HomeGuest from './container/HomeGuest/HomeGuest';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './container/Dashboard/Dashboard';

function App({ authUser, user, getChilds }) {
	const { _id } = user;
	useEffect(() => {
		authUser();
	}, [authUser]);

	useEffect(() => {
		getChilds();
	}, [getChilds, user]);

	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Route
					exact
					path='/'
					render={() => (_id ? <Dashboard /> : <HomeGuest />)}
				/>
				<Route
					path='/login'
					render={() => (_id ? <Redirect to='/' /> : <Login />)}
				/>
				<Route
					path='/register/:account'
					render={(props) =>
						_id ? <Redirect to='/' /> : <SignUp {...props} />
					}
				/>
			</div>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

const mapDispatchToProps = {
	authUser,
	getChilds,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
