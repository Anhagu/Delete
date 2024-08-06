import React from 'react';
import './App.css';
import Main from './components/pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return(
    <BrowserRouter>
    <Main />
      <Routes>
        {/* <Route path='/initTeamSearch' element={<TeamSearch />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <div className="App">
     <Router />
    </div>
  );
}

