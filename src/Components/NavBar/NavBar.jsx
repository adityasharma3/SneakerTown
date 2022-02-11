import React, { Fragment, useEffect, useState } from "react";
import { Navbar, Button, DropDownBtn } from "./NavBarStyles";

import { useDispatch } from "react-redux";
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

        <DropDownBtn onClick={dropButtonHandler}>V</DropDownBtn>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
