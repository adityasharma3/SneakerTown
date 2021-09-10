import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import { Navbar, Button } from './NavBarStyles';

const NavBar = (props) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    return (
        <Navbar>
            <h1>SneakerTown</h1>
            <Button onClick={() => setShowCart(true)}>
                Cart  {(props.cartData.length === 0) ? null : props.cartData.length}
            </Button>
            <Cart
                onClose={() => setShowCart(false)}
                showCart={showCart}
                cartData={props.cartData ? props.cartData : null}
            />
        </Navbar>
    );
}

export default NavBar;