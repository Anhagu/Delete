import React from 'react';
import './App.css';
import Main from './components/pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/pages/Search/Search';

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/teamSearch' element={<Search />} />
        {/* <Route path='/myPage' element={<MyPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <div className="App" style={{ margin : '0 auto'}}>
      <Router />
    </div>
  );
}


