import React, { Fragment } from 'react';
import NavBar from './Components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Cart } from './pages/Cart';
import View from './pages/View';
import ViewAll from './pages/ViewAll';

function App() {


  return (
    <Router>
      <Fragment>
        <NavBar />
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
