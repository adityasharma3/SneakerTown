import React, { Fragment, useEffect, useState } from "react";
import { BillingSection, CheckoutDisplay } from "./CartStyles";
import { useSelector } from "react-redux";
import { projectFirestore } from "../../config/firebaseConfig";
import { selectUser } from "../../store/userSlice";

const Checkout = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    projectFirestore.collection("cart_" + user.uid).onSnapshot((snap) => {
      const newCartProduct = snap.docs.map((doc) => ({
        ...doc.data(),
      }));

      setCartProducts(newCartProduct);
    });
  }, [projectFirestore]);

  const price = cartProducts.map((cartProduct) => {
    return (cartProduct.retail_price_cents / 100) * 80;
  });

  const reducerOfPrice = (accumulator, currentValue) =>
    accumulator + currentValue;

  const totalPrice = price.reduce(reducerOfPrice, 0);

  return (
    <Fragment>
      <BillingSection>
        <h2>Total : ₹{totalPrice}</h2>
      </BillingSection>

      <CheckoutDisplay>
        <form>
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
