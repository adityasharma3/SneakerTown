import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectFirestore } from "../../config/firebaseConfig";
import { cartSliceActions } from "../../store/cartSlice";
import { selectUser } from "../../store/userSlice";
import { Container, MiddleSection, Select, Button, Story } from "./Styles";
import { serverTimestamp } from "@firebase/firestore";

const SnerakerPage = ({ shoeData }) => {
  const [size, setSize] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    console.log(cartItems);
    if (size === "Select size (UK)") {
      alert("Please enter shoe size");
      return;
    }

    dispatch(cartSliceActions.addItemToCart({ size, ...shoeData }));

    // adding shoe to firestore database for singed in user
    projectFirestore.collection("cart_" + user.uid).add({
      size,
      ...shoeData,
      timestamp: serverTimestamp(),
    });
  };

  const selectedSize = useRef();

  if (!shoeData) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        404 Error! Page not found
      </h1>
    );
  }

  return (
    <Container>
      <h2>{shoeData.name}</h2>
      <img src={shoeData.original_picture_url} alt={shoeData.name} />

      <MiddleSection>
        <Select value={size} onChange={(event) => setSize(event.target.value)}>
          <option ref={selectedSize}>Select size (UK)</option>
          {shoeData.size_range.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <h2 style={{ float: "right" }}>
          ₹{(shoeData.retail_price_cents / 100) * 72}
        </h2>
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </MiddleSection>
      <Story dangerouslySetInnerHTML={{ __html: shoeData.story_html }} />
    </Container>
  );
};

export default SnerakerPage;
