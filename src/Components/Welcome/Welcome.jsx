import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { Container } from "./style";

const Welcome = () => {
  const userDetail = useSelector(selectUser);

  return (
    <>
      <Container>
        <h2>
          Welcome {userDetail.displayName} hope you find what you've been
          looking for 🛒
        </h2>
      </Container>
    </>
  );
};

export default Welcome;
