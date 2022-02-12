import React, { Fragment, useState, useEffect } from "react";
import Category from "./Category";
import { Container } from "./styles";

const datapoint = `https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json`;

const Categories = () => {
  const [options, setOptions] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(datapoint)
      .then((data) => data.json())
      .then((res) => {
        res.sneakers.forEach((element) => {
          setOptions((prev) => {
            return new Set([...prev, element.brand_name]);
          });
        });
      });

    setisLoading(false);
  }, []);

  return (
    <Fragment>
      <Container>
        {Array.from(options).map((item) => (
          <Category key={Math.random()} item={item} />
        ))}
      </Container>
    </Fragment>
  );
};

export default Categories;
