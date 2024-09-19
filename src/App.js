import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />}></Route>
					<Route path="/SignUp" element={<SignUp />}></Route>
					<Route path="/Main" element={<Main />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;