import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Team from './pages/Main/Team';
import JoinTeam from './pages/JoinTeam/JoinTeam';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />}></Route>
					<Route path="/SignUp" element={<SignUp />}></Route>
					<Route path="/Team" element={<Team />}></Route>
					<Route path="/JoinTeam" element={<JoinTeam />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;