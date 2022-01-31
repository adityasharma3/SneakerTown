import React, { Fragment, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import MenuOptions from './Components/MenuOptions/MenuOptions'

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
      {/* <NavBar /> */}
      {/* <Sneakers cartSectionData={cartSectionDataHandler} /> */}
      <MenuOptions />
    </Fragment>
  );
}

export default App;
