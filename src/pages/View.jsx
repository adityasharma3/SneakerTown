import React from "react";
import { useSelector } from "react-redux";
import SnerakerPage from "../Components/SneakerPage/SnerakerPage";

const View = () => {
  const shoeData = useSelector((state) => state.sneakerSlice.domain.payload);

  console.log(shoeData);

  return (
    <div>
      <SnerakerPage shoeData={shoeData} />
    </div>
  );
};

export default View;
