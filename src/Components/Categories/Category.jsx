import React from "react";
import styled from "styled-components";

const Category = ({ item }) => {
  //   const bg = item === "adidas" ? url(`../assets/mics/1.jpeg`) : `none`;
  return (
    <Container>
      <h3>{item}</h3>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid white; */
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: 8vw;
  /* backgroundimage: ; */
  background: #1a1c36;

  :hover {
    transition: 0.35s ease-in-out;
    transform: scale(1.1);
  }
`;
