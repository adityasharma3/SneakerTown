import React from "react";
import { Container, MiddleSection, Select, Button, Story } from "./Styles";

const SnerakerPage = ({ shoeData }) => {
  if (!shoeData) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        404 Error! Page not found
      </h1>
    );
  }

  return (
    <Container>
      <h2>{shoeData.name}</h2>
      <img src={shoeData.original_picture_url} alt={shoeData.name} />

      <MiddleSection>
        <Select>
          <option>Select size (UK)</option>
          {shoeData.size_range.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <h2 style={{ float: "right" }}>
          ₹{(shoeData.retail_price_cents / 100) * 72}
        </h2>
        <Button>Add to cart</Button>
      </MiddleSection>
      <Story dangerouslySetInnerHTML={{ __html: shoeData.story_html }} />
    </Container>
  );
};

export default SnerakerPage;
