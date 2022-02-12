import React, { Fragment, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import MenuOptions from './Components/MenuOptions/MenuOptions'

import { useSelector } from 'react-redux';
import Grid from './Components/Grid/Grid';
import BestSellers from './Components/BestSellers/BestSellers';
import Categories from './Components/Categories/Categories';

function App(props) {

  const [cartItems, setCartItems] = useState([]);

  const isToggled = useSelector(state => state.ui.menuIsVisible);

  return (
    <Fragment>
      <NavBar cartData={cartItems} />
      {isToggled && <MenuOptions />}
      <Categories />
      <Grid />
      <BestSellers />
    </Fragment>
  );
}

export default App;
