import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SneakerView from "../Components/SneakerView/SneakerView";

const datapoint = `https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json`;

const ViewAll = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch(datapoint)
      .then((res) => res.json())
      .then((data) => setSneakers(data.sneakers));
  }, []);

  // const SneakerClickHandler = (item) => {
  //   useNavigate("/view/{item.id}");
  // };

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
        // <Link to={"/view/" + item.id}>
        <SneakerView
          key={item.id}
          data={item}
          // onClick={SneakerClickHandler(item)}
        />
        // </Link>
      ))}
    </div>
  );
};

export default ViewAll;
