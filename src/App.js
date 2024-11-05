import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import MakeTeam from './pages/MakeTeam/MakeTeam';
import TournamentScore from './Tournament/TournamentScore';
import LeagueMain from './Tournament/LeagueMain';
import EditProfile from './pages/EditProfile/EditProfile';
import Main2 from './pages/Main/Main2';
import Main3 from './pages/Main/Main3';
import LeagueMain0 from './Tournament/LeagueMain0';
import Main4 from './pages/Main/Main4';
import LeagueMain2 from './Tournament/LeagueMain2';
import Search0 from './pages/Search/Search0';
import LeagueMain21 from './Tournament/LeagueMain21';
import Search21 from './pages/Search/Search21';
import Search4 from './pages/Search/Search4';

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
					<Route path="/LeagueMain/TournamentScore" element={<TournamentScore />}></Route>
					<Route path="/LeagueMain" element={<LeagueMain />}></Route>
					<Route path="/EditProfile" element={<EditProfile />}></Route>
					<Route path="/Main2" element={<Main2 />}></Route>
					<Route path="/Main3" element={<Main3 />}></Route>
					<Route path="/LeagueMain0" element={<LeagueMain0 />}></Route>
					<Route path="/Main4" element={<Main4 />}></Route>
					<Route path="/LeagueMain2" element={<LeagueMain2 />}></Route>
					<Route path="/Search0" element={<Search0 />}></Route>
					<Route path="/LeagueMain21" element={<LeagueMain21 />}></Route>
					<Route path="/Search21" element={<Search21 />}></Route>
					<Route path="/Search4" element={<Search4 />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;