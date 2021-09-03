import React, { useState } from 'react'
import { ShoeDisplay } from './CartStyles';

const CartDisplay = (props) => {

    const [cart, setCart] = useState([]);

    console.log(props.data);


    // if (props.data.length == 0) {
    //     return null;
    // }

    return (
        props.data.map((item) => {
            return (
                <ShoeDisplay key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.grid_picture_url} />
                </ShoeDisplay>
            );
        })
    );
}

export default CartDisplay
