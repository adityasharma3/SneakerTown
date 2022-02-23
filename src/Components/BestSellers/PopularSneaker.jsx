import React, { Fragment, useState } from "react";
import { Button, Container } from "./PopularSneakerStyles";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";

const PopularSneaker = ({ data }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addItemToCart(data));
  };
  return (
    <Fragment>
      <Container>
        <h3>{data.name}</h3>
        <img src={data.grid_picture_url} />
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </Container>
    </Fragment>
  );
};

export default PopularSneaker;
