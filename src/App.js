import React, { Fragment } from 'react';
import NavBar from './Components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Cart } from './pages/Cart';
import View from './pages/View';
import ViewAll from './pages/ViewAll';
import { useSelector } from 'react-redux';
import { selectUser } from './store/userSlice';
import Landing from './pages/Landing';

function App() {

  const user = useSelector(selectUser);

  // console.log(user);

  return (
    <Router>
      <Fragment>
        <NavBar />
        {!user ? <Landing /> :
          (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/view-all' element={<ViewAll />} />
              <Route path='/view/:id' element={<View />} />
            </Routes>
          )}
      </Fragment>
    </Router>
  );
}

export default App;
