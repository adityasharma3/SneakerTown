import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sneakerSliceActions } from "../../store/sneakerSlice";
import { Button, BottomSection, Select } from "./styles";

const SneakerView = ({ data }) => {
  const dispatch = useDispatch();

  const linkClickHandler = (data) => {
    dispatch(sneakerSliceActions.find(data));

    console.log(data);
  };

  return (
    <Link
      className="container"
      to={"/view/" + data.id}
      onClick={linkClickHandler(data)}
      style={{
        backgroundColor: "#1A1C36",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "25%",
        flexWrap: "wrap",
        margin: "2rem 2%",
        backgroundColor: "#1A1C36",
        textAlign: "center",
        padding: "2%",
        borderRadius: "2rem",
        cursor: "pointer",
      }}
    >
      <h3>{data.name}</h3>
      <img src={data.grid_picture_url} />
      <BottomSection>
        <h3>₹{(data.retail_price_cents / 100) * 72}</h3>
        <Select>
          <option>Select size</option>
          {data.size_range.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Button>Add to cart</Button>
      </BottomSection>
    </Link>
  );
};

export default SneakerView;
