import React, { useState } from "react";
import { useEffect } from "react";
import SneakerView from "../Components/SneakerView/SneakerView";

const datapoint = `https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json`;

const ViewAll = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch(datapoint)
      .then((res) => res.json())
      .then((data) => setSneakers(data.sneakers));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: "auto 5vw",
      }}
    >
      {sneakers.map((item) => (
        <SneakerView key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ViewAll;
