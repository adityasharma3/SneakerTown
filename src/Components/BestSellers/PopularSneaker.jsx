import React, { Fragment } from "react";
import { Button, Container } from "./PopularSneakerStyles";

const PopularSneaker = ({ data }) => {
  return (
    <Fragment>
      <Container>
        <h3>{data.name}</h3>
        <img src={data.grid_picture_url} />
        <Button>Add to cart</Button>
      </Container>
    </Fragment>
  );
};

export default PopularSneaker;
