import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className={'App'}>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
        <Footer/>
      </div>

    </>
  );
}

export default App;
