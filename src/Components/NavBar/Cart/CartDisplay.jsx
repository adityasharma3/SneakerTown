import React, { Fragment, useState } from 'react'
import { ShoeDisplay, TotalPrice } from './CartStyles';

const CartDisplay = (props) => {

    // const [total, setTotal] = useState(0);

    // console.log(props);

    // useState(() => {
    //     setTotal((prev) => {
    //         return (prev + (props.data[0].retail_price_cents/100*72)); 
    //     });
    // },[props.data]);

    return (
        props.data.map((item) => {
            return (
                <Fragment>
                    <ShoeDisplay key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.grid_picture_url} />
                        <h3>₹{item.retail_price_cents / 100 * 72}</h3>
                    </ShoeDisplay>

                    {/* <TotalPrice>
                        {total}
                    </TotalPrice> */}
                </Fragment>
            )
        })
    );
}

export default CartDisplay
