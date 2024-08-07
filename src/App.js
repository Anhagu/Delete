import React from 'react';
import './App.css';
import Main from './components/pages/Main/Main';
import { BrowserRouter, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Router = () => {
  return(
    <BrowserRouter>
    <Main />
      <Routes>
        {/* <Route path='/initTeamSearch' element={<TeamSearch />} /> */}
        {/* <Route path='/myPage' element={<MyPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <div className="App" style={{maxWidth:'70%', margin : '0 auto'}}>
      <Router />
    </div>
  );
}


