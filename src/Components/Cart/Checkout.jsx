import React, { Fragment } from "react";
import { BillingSection, CheckoutDisplay } from "./CartStyles";
import { useSelector } from "react-redux";

const Checkout = () => {
  const shoesInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Fragment>
      <BillingSection>
        <h2>Total : ₹{totalPrice}</h2>
      </BillingSection>

      <CheckoutDisplay>
        <form action="">
          <p>Address</p>
          <input type="text" />
          <p>City</p>
          <input type="text" />
          <p>State </p>
          <input type="text" />
        </form>
      </CheckoutDisplay>
    </Fragment>
  );
};

export default Checkout;
