import React, { Fragment, useEffect, useState } from 'react'
import { Button } from '../NavBarStyles';
import { CartHeader, CompleteCart, CartBody } from './CartStyles';
import CartDisplay from './CartDisplay';

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const [ans , setAns] = useState(0);

    console.log(props.cartData);

    useEffect(() => {
        setTotal((prev) => {            
            props.cartData.map((item) => {
                setAns(total + (prev + item.retail_price_cents/100 * 72));
            });

            return ans;
        });
    }, [props.cartData]);

    if (!props.showCart) {
        return null;
    }

    return (
        <Fragment>
            <CartBody>
                <CompleteCart>
                    <CartHeader>
                        <h1>Cart</h1>
                        <h2>₹{total}</h2>
                        <Button onClick={props.onClose}>X</Button>
                    </CartHeader>

                    <CartDisplay data={props.cartData}></CartDisplay>
                </CompleteCart>
            </CartBody>
        </Fragment>
    )
}

export default Cart