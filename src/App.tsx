import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <div className={'App'}>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/projects'} element={<Projects/>} />
        </Routes>
        <Footer/>
      </div>

    </>
  );
}

export default App;
