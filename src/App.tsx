import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  );
}

export default App;
