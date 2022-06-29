import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sneakerSliceActions } from "../../store/sneakerSlice";
import { Button, BottomSection, Select, Container } from "./styles";
import { cartSliceActions } from "../../store/cartSlice";
import { projectFirestore } from "../../config/firebaseConfig";
import { serverTimestamp } from "@firebase/firestore";
import { selectUser } from "../../store/userSlice";

const SneakerView = ({ data }) => {
  const [size, setSize] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addItemToCart({ size, ...data }));

    projectFirestore.collection("cart_" + user.uid).add({
      size,
      ...data,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <Container>
      <Link
        className="s"
        to={"/view/" + data.id}
        onClick={(e) => {
          // this is to stop automatic clicking of links in a webpage.
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          dispatch(sneakerSliceActions.find(data));
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundColor: "#1A1C36",
          textAlign: "center",
          padding: "3%",
          cursor: "pointer",
        }}
      >
        <h3>{data.name}</h3>
        <img src={data.grid_picture_url} alt={data.name} />
      </Link>
      <BottomSection>
        <h3>₹{(data.retail_price_cents / 100) * 72}</h3>
        <Select value={size} onChange={(event) => setSize(event.target.value)}>
          <option>Select size</option>
          {data.size_range.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </BottomSection>
    </Container>
  );
};

export default SneakerView;
