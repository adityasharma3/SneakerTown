import React, { Fragment, useEffect, useState } from "react";
import { BillingSection, CheckoutDisplay } from "./CartStyles";
import { useSelector } from "react-redux";
import { projectFirestore } from "../../config/firebaseConfig";
import { selectUser } from "../../store/userSlice";

const Checkout = () => {
  const [price, setPrice] = useState(0);
  const user = useSelector(selectUser);

  useEffect(() => {
    projectFirestore.collection("cart_" + user.uid).onSnapshot((snap) => {
      console.log(snap);
      snap.forEach((doc) => {
        // setMata(doc);
        // setPrice((prev) => { prev + (doc.data().retail_price_cents/100))
        setPrice((prev) => prev + (doc.data().retail_price_cents / 100) * 80);
      });
    });
    // console.log(mata);
    if (!user) setPrice(0);
  }, [projectFirestore.collection("cart_" + user.uid)]);

  return (
    <Fragment>
      <BillingSection>
        <h2>Total : ₹{price}</h2>
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
