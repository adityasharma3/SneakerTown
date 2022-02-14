import React, { Fragment } from 'react';
import NavBar from './Components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Home from './pages/Home';
import { Cart } from './pages/Cart';
import View from './pages/View';
import ViewAll from './pages/ViewAll';
import { useState } from 'react';

function App(props) {

  const [cartItems, setCartItems] = useState([]);

  const isToggled = useSelector(state => state.ui.menuIsVisible);

  return (
    <Router>
      <Fragment>
        <NavBar cartData={cartItems} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/view-all' element={<ViewAll />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
