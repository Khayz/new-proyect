import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { authUser, getChilds } from './redux/actions/index.actions';

import './App.scss';
import 'react-toastify/dist/ReactToastify.min.css';

import Navbar from './components/Navbar/Navbar';
import HomeGuest from './container/HomeGuest/HomeGuest';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './container/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Settings from './container/Settings/Settings';
import Assignments from './container/Assignments/Assignments';
import ClassDemo from './container/Dashboard/Teacher/ClassDemo/ClassDemo';

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
				<Route path='/assignments' component={Assignments} />
				<Route
					exact
					path='/'
					render={() => (_id ? <Dashboard user={user} /> : <HomeGuest />)}
				/>
				<Route
					path='/login'
					render={() => (_id ? <Redirect to='/' /> : <Login />)}
				/>
				<Route
					path='/settings'
					render={() => (_id ? <Settings /> : <Redirect to='/' />)}
				/>
				<Route
					path='/register/:account'
					render={(props) =>
						_id ? <Redirect to='/' /> : <SignUp {...props} />
					}
				/>
				<Route
					path='/demo-class'
					render={(props) =>
						_id ? <ClassDemo {...props} /> : <Redirect to='/' />
					}
				/>
				<Route
					path='/register/:account'
					render={(props) =>
						_id ? <Redirect to='/' /> : <SignUp {...props} />
					}
				/>
				<Footer />
				<ToastContainer
					autoClose={5000}
					hideProgressBar={false}
					draggable
					position='top-right'
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
