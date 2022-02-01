import React, { Fragment, useEffect, useState } from "react";
import { Navbar, Button } from "./NavBarStyles";

import { useDispatch } from "react-redux";
import uislice from "../../store/uiSlice";
import { uiSliceActions } from "../../store/uiSlice";

const NavBar = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const []

  const dispatch = useDispatch();

  const dropButtonHandler = () => {
    dispatch(uiSliceActions.toggle());
  };

  return (
    <Fragment>
      <Navbar>
        <h1>SneakerTown</h1>
        <Button onClick={() => setShowCart(true)}>
          Cart {props.cartData.length === 0 ? null : props.cartData.length}
        </Button>

        <Button onClick={dropButtonHandler}>Drop</Button>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
