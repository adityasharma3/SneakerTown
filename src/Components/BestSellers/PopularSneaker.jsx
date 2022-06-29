import React, { Fragment } from "react";
import { Button, Container, SpanSales } from "./PopularSneakerStyles";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";
import { sneakerSliceActions } from "../../store/sneakerSlice";
import { Link } from "react-router-dom";

const PopularSneaker = ({ data }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addItemToCart(data));
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
