import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import Navbar from './components/Navbar/Navbar';
import HomeGuest from './container/HomeGuest/HomeGuest';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Route exact path='/' render={() => <HomeGuest />} />
				<Route path='/login' render={() => <Login />} />
				<Route
					path='/register/:account'
					render={(props) => <SignUp {...props} />}
				/>
			</div>
		</BrowserRouter>
	);
}

export default App;
