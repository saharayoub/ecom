import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';



const App = () => {
  return (
  <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>
  );
};

export default App;
