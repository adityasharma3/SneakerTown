import React from "react";
import { Fragment } from "react";
import BestSellers from "../Components/BestSellers/BestSellers";
import Categories from "../Components/Categories/Categories";
import Grid from "../Components/Grid/Grid";

const Home = () => {
  return (
    <Fragment>
      <Categories />
      <Grid />
      <BestSellers />
    </Fragment>
  );
};

export default Home;
