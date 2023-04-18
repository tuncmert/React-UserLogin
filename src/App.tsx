import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Product/>} />
        </Routes>
    </div>
  );
}

export default App;
