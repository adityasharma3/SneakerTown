import React, { useEffect, useState, Fragment } from 'react'
import Sneaker from './Sneaker';
import { SneakerDisplay } from './Styling';


const Sneakers = (props) => {
    const [sneakers, setSneakers] = useState([]);

    const datapoint = 'https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json';

    useEffect(() => {
        fetch(datapoint)
            .then(res => res.json())
            .then(data => {
                console.log(data.sneakers);
                setSneakers(data.sneakers);
            });

    }, []);

    return (
        <Fragment>
            <SneakerDisplay>
                {sneakers.map((item) =>
                    <Sneaker
                        key={item.id}
                        shoeData={item}
                    />
                )}
            </SneakerDisplay>
        </Fragment>
    );
}

export default Sneakers;