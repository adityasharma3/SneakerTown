import React, { Fragment, useEffect, useState } from "react";
import { Container } from "./BestSellerStyles";
import data from "../../data/best-sellers";
import PopularSneaker from "./PopularSneaker";
import { Button } from "./PopularSneakerStyles";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    setSneakers(data);
  }, []);

  return (
    <Fragment>
      <h1
        style={{
          margin: "auto auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Best Sellers
      </h1>
      <Container>
        {sneakers.map((item) => (
          <PopularSneaker data={item} key={item.id} />
        ))}
      </Container>

      <Button>
        <Link to="/view-all">View All products</Link>
      </Button>
      <br></br>
    </Fragment>
  );
};

export default BestSellers;
