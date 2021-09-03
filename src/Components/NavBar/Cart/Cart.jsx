import React, { Fragment } from 'react'
import { Button } from '../NavBarStyles';
import { CartHeader, CompleteCart, CartBody } from './CartStyles';
import CartDisplay from './CartDisplay';

const Cart = (props) => {

    if (!props.showCart) {
        return null;
    }

    // console.log(props.cartData);

    return (
        <Fragment>
            <CartBody>
                <CompleteCart>
                    <CartHeader>
                        <h1>Cart</h1>
                        <Button onClick={props.onClose}>X</Button>
                    </CartHeader>

                    <CartDisplay data={props.cartData}></CartDisplay>
                </CompleteCart>
            </CartBody>
        </Fragment>
    )
}

export default Cart
