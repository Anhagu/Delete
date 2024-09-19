import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />}></Route>
					<Route path="/SignUp" element={<SignUp />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;