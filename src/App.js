import React, { Fragment, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Sneakers from './Components/Sneakers/Sneakers';

function App(props) {

  const [cartItems, setCartItems] = useState([]);

  const cartSectionDataHandler = (data) => {

    setCartItems((prev) => {
      return [data, ...prev];
    });
    // console.log(cartItems);
  };

  return (
    <Fragment>
      <NavBar cartData={cartItems} />
      <Sneakers cartSectionData={cartSectionDataHandler} />
    </Fragment>
  );
}

export default App;
