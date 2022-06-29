import React, { Fragment } from "react";
import { Button, Container, SpanSales } from "./PopularSneakerStyles";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";
import { sneakerSliceActions } from "../../store/sneakerSlice";
import { Link } from "react-router-dom";
import { projectFirestore } from "../../config/firebaseConfig";
import { serverTimestamp } from "@firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const PopularSneaker = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addItemToCart(data));

    projectFirestore.collection("cart_" + user.uid).add({
      size: 8,
      ...data,
      timestamp: serverTimestamp(),
    });
  };

  const imageClickHandler = () => {
    dispatch(sneakerSliceActions.find(data));
  };

  return (
    <Fragment>
      <Container>
        <h3>{data.name}</h3>
        <Link to={"/view/" + data.id}>
          <img
            src={data.grid_picture_url}
            onClick={imageClickHandler}
            alt={data.id}
          />
        </Link>
        <Button onClick={addToCartHandler}>Add to cart</Button>
        <SpanSales>{Math.round(Math.random() * 1000) + "📈"}</SpanSales>
      </Container>
    </Fragment>
  );
};

export default PopularSneaker;
