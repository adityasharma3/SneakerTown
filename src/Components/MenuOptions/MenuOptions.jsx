import React, { useEffect, useState } from 'react';

const datapoint = `https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json`;


const MenuOptions = () => {

    const [options, setOptions] = useState([]);


    useEffect(() => {
        // fetch(datapoint)
        fetch(datapoint)
            .then(res => res.json())
            .then(data => {
                // console.log(data.sneakers);
                // setOptions(data.sneakers.category);
                // console.log(options);

                // console.log(data);

                let cleaned_data = [];

                // cleaned_data.push(data.sneakers.map(item) => return [
                //    item.brand_name
                // ]);

                // cleaned_data = [...new Set(cleaned_data.sneakers)];

                console.log(cleaned_data);

                cleaned_data.map((item) => {
                    console.log(item);

                    // if (!options.includes(item)) {

                    //     setOptions((prevData) => {
                    //         return [...prevData,
                    //         item]
                    //     });
                    // console.log(options);
                    setOptions((prev) => {
                        return [...prev, item];
                    })
                });
            })

            console.log(options);
    }, []);

    
    // console.log(options);

  return (
  <ul>
      <li></li>
  </ul>);
};

export default MenuOptions;
