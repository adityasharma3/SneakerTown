import React, { Fragment, useEffect, useState } from "react";
import { Button } from "../NavBar/NavBarStyles";
import { LeftSections, RightSections, ShoeDisplay } from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSliceActions } from "../../store/cartSlice";
import { projectFirestore } from "../../config/firebaseConfig";
import { selectUser } from "../../store/userSlice";

const CartDisplay = () => {
  const [cartItems, setCartItems] = useState([{}]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const sub = () => {
      projectFirestore
        .collection("cart_" + user.uid)
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => {
          let documents = [];

          snap.forEach((doc) => {
            documents.push({
              ...doc.data(),
              id: doc.id,
            });
          });

          setCartItems(documents);
        });
    };

    return () => sub();
  }, []);

  const removeFromCartHandler = (id) => {
    dispatch(cartSliceActions.removeItemFromCart(id));
  };

  console.log(cartItems);

  if (cartItems.length === 0) {
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
  } else
    return cartItems.map((item) => {
      return (
        <Fragment key={item.id}>
          <ShoeDisplay key={item.id} style={{ position: "relative" }}>
            <LeftSections>
              <img src={item.grid_picture_url} alt={item.name} />
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
              <h3>₹{(item.retail_price_cents / 100) * 80}</h3>
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
