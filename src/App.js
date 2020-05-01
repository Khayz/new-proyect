import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { authUser } from './redux/actions/index.actions';

import './App.scss';

import Navbar from './components/Navbar/Navbar';
import HomeGuest from './container/HomeGuest/HomeGuest';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App({ authUser, user: { _id } }) {
	useEffect(() => {
		authUser();
	}, [authUser]);

	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Route exact path='/' render={() => <HomeGuest />} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
