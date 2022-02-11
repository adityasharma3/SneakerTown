import React, { useEffect, useState } from "react";
import { StyledMenuOptions, MenuButton } from "./Styles";


const datapoint = `https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json`;

const MenuOptions = () => {
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

  // console.log(options);

  console.log(Array.from(options).map((item) => console.log(item)));

  return (
    <StyledMenuOptions>
      {(isLoading) ?  <h2>Loading...</h2> : Array.from(options).map((item) => (
        <MenuButton>
          <h3>{item}</h3>
        </MenuButton>
      ))}
    </StyledMenuOptions>
  );
};

export default MenuOptions;
