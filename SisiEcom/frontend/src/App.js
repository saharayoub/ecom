import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import MakeupPage from './pages/MakeupPage';
import SkincarePage from './pages/Skincare';
import BestsellerPage from './pages/Bestseller';
import PromotionPage from './pages/PromotionPage';
import About from './pages/About';
import OrderConfirmation from './pages/OrderConfirmation';
import LogoutPage from './pages/Logout';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Red Lipstick', category: 'Makeup' },
    { id: 2, name: 'Cleansing gel', category: 'Skincare Product' },
    { id: 3, name: 'Clamy Blush', category: 'Makeup' },
    { id: 4, name: 'Body Lotion', category: 'Skincare Product' },
    { id: 5, name: 'Highlighter', category: 'Makeup' },
    { id: 6, name: 'Maple Juice Body Cream', category: 'Skincare Product' },
    { id: 7, name: 'Peeling solution by The Ordinary', category: 'Skincare Product' },
    { id: 8, name: 'Clamy Concealer Stick', category: 'Makeup' },
    { id: 9, name: 'The Ordinary skincare set', category: 'Skincare Product' },
    { id: 10, name: 'Skincare Products by Curology', category: 'Skincare Product' },
    { id: 11, name: 'Lip Gloss', category: 'Makeup' },
    { id: 12, name: 'Brushes set', category: 'Makeup' },
    { id: 13, name: 'Volumizing Maskara', category: 'Makeup' },
    { id: 14, name: 'Yves Saint Laurent Foundation', category: 'Makeup' },
    { id: 15, name: 'Glossier product', category: 'Skincare Product' },
  ]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [customer, setCustomer] = useState(null);
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState('unauthenticated');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
      setCustomer({ email });
      console.log('Customer logged in:', response.data);
    } catch (error) {
      console.error('Error fetching customer data', error);
      alert('Error fetching customer data');
    }
  };

  const handleRegister = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', userData);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  const handleSearch = (searchTerm) => {
    console.log('Recherche pour:', searchTerm);
  };

  return (
    <div className='overflow-hidden'>
      <Router>
        <Header products={products} onSearch={handleSearch} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Register onRegister={handleRegister} />} />
          <Route path='/login' element={<Login setAuthState={setAuthState} setUser={setUser} />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/makeup' element={<MakeupPage />} />
          <Route path='/skincare' element={<SkincarePage />} />
          <Route path='/bestseller' element={<BestsellerPage />} />
          <Route path='/promotion' element={<PromotionPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/order-confirmation' element={<OrderConfirmation />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
