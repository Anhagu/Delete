import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import MakeTeam from './pages/MakeTeam/MakeTeam';
import EditProfile from './pages/EditProfile/EditProfile';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />}></Route>
					<Route path="/SignUp" element={<SignUp />}></Route>
					<Route path="/Main" element={<Main />}></Route>
					<Route path="/Search" element={<Search />}></Route>
					<Route path="/MakeTeam" element={<MakeTeam />}></Route>
					<Route path="/EditProfile" element={<EditProfile />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;