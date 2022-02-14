import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sneakerSliceActions } from "../../store/sneakerSlice";
import { Button, BottomSection, Select, Container } from "./styles";

const SneakerView = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Link
        className="s"
        to={"/view/" + data.id}
        onClick={(e) => {
          // this is to stop automatic clicking of links in a webpage.
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          dispatch(sneakerSliceActions.find(data));
        }}
        style={{
          backgroundColor: "#1A1C36",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundColor: "#1A1C36",
          textAlign: "center",
          padding: "3%",
          cursor: "pointer",
        }}
      >
        <h3>{data.name}</h3>
        <img src={data.grid_picture_url} />
      </Link>
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
    </Container>
  );
};

export default SneakerView;
