import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Home, ProductDetails, Signup, Login} from './pages';


const App = () => {
  return (
  <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup />} />
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
