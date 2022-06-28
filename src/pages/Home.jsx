import React from "react";
import BestSellers from "../Components/BestSellers/BestSellers";
import Categories from "../Components/Categories/Categories";
import Grid from "../Components/Grid/Grid";
import Welcome from "../Components/Welcome/Welcome";

const Home = () => {
  return (
    <>
      <Welcome />
      <Categories />
      <Grid />
      <BestSellers />
    </>
  );
};

export default Home;
