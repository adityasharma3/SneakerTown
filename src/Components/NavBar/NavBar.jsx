import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import { Navbar, Button } from './NavBarStyles';

const NavBar = (props) => {
    const [numberOfCartItems, setnumberOfCartItems] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // setnumberOfCartItems(props.cartData);

    // console.log(props.cartData);
    // useEffect(() => {
    //     setCartItems(props.cartData);
    //     setnumberOfCartItems(props.cartData.length);
    // },[]);

    // console.log(props.cartData.length);


    return (
        <Navbar>
            <h1>SneakerTown</h1>
            <Button onClick={() => setShowCart(true)}>
                Cart  {(numberOfCartItems === 0) ? null : numberOfCartItems}

            </Button>
            <Cart
                onClose={() => setShowCart(false)}
                showCart={showCart}
                cartData={props.cartData ? props.cartData : null}
            />
        </Navbar>
    )
}

export default NavBar;