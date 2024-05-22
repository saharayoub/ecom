import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import MakeupPage from './pages/MakeupPage';
import SkincarePage from './pages/Skincare';
import BestsellerPage from './pages/Bestseller';
import About from './pages/About';

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
        <Route path='/makeup' element={<MakeupPage />} />
        <Route path='/skincare' element={<SkincarePage />} />
        <Route path='/bestseller' element={<BestsellerPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>
  );
};

export default App;
