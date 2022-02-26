import React from "react";
import CartDisplay from "../Components/Cart/CartDisplay";
import { useSelector } from "react-redux";
import Checkout from "../Components/Cart/Checkout";

export const Cart = () => {
  const shoesInCart = useSelector((state) => state.cart.items);

  return (
    <div>
      <CartDisplay />
      {shoesInCart.length !== 0 && <Checkout />}
    </div>
  );
};
