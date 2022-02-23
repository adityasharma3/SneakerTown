import React, { Fragment, useState } from "react";
import { Button } from "../NavBar/NavBarStyles";
import {
  LeftSections,
  RightSections,
  ShoeDisplay,
  TotalPrice,
} from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSliceActions } from "../../store/cartSlice";

const CartDisplay = (props) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(cartSliceActions.removeItemFromCart(id));
  };

  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  if (cartItems == "") {
    return (
      <div
        className="no--cart--items"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <h2>No items present in cart</h2>

        <p>
          Back to <Link to="/">Shopping page</Link>
        </p>
      </div>
    );
  }

  return cartItems.map((item) => {
    return (
      <Fragment key={item.id}>
        <ShoeDisplay key={item.id} style={{ position: "relative" }}>
          <LeftSections>
            <img src={item.image} />
          </LeftSections>

          <RightSections>
            <h3>{item.name}</h3>
            <Button
              key={item.id}
              onClick={() => removeFromCartHandler(item.id)}
              style={{
                position: "absolute",
                right: "5%",
                top: "5%",
              }}
            >
              X
            </Button>
            <p>{item.size} UK</p>
            <p>Quantity : {item.quantity}</p>
            <h3>₹{(item.totalPrice / 100) * 72}</h3>
          </RightSections>
        </ShoeDisplay>
        <hr
          style={{
            width: "80%",
            outline: "none",
            border: "1px solid grey",
          }}
        />
      </Fragment>
    );
  });
};

export default CartDisplay;
