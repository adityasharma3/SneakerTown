import React, { Fragment, useEffect, useState } from "react";
import { Navbar, Button, DropDownBtn } from "./NavBarStyles";
import { Link } from "react-router-dom";

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
        <Link
          to="/"
          style={{
            display: "flex",
            fontSize: "25px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          SneakerTown
        </Link>
        <Button onClick={() => setShowCart(true)}>
          <Link to="/cart">Cart</Link>
          {props.cartData.length === 0 ? null : props.cartData.length}
        </Button>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
