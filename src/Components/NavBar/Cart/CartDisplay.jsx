import React, { Fragment, useState } from 'react'
import { Button } from '../NavBarStyles';
import { ShoeDisplay, TotalPrice } from './CartStyles';

const CartDisplay = (props) => {
    return (
        props.data.map((item) => {
            return (
                <Fragment key={item.id}>
                    <ShoeDisplay key={item.id} style={{ position: 'relative' }}>
                        <h3>{item.name}</h3>
                        <Button
                            key={item.id}
                            onClick={(item) => props.removed(item)}
                            style={{
                                position: 'absolute',
                                right: '5%',
                                top: '5%'
                            }}>X</Button>
                        <img src={item.grid_picture_url} />
                        <h3>₹{item.retail_price_cents / 100 * 72}</h3>
                    </ShoeDisplay>
                </Fragment>
            )
        })
    );
}

export default CartDisplay
