import React, { Fragment, useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
import SubNavBar from './SubNavBar';
import { Navbar, Button} from './NavBarStyles';

const NavBar = (props) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    return (
        <Fragment>
        <Navbar>
            <h1>SneakerTown</h1>
            <Button onClick={() => setShowCart(true)}>
                Cart  {(props.cartData.length === 0) ? null : props.cartData.length}
            </Button>
            {/* <Cart
                onClose={() => setShowCart(false)}
                showCart={showCart}
                cartData={props.cartData ? props.cartData : null}
            /> */}
        </Navbar>
        {/* <SubNavBar>
            <ul>
                <li><h3>Shoes</h3></li>
            </ul>
        </SubNavBar> */}
        {/* <SubNavBar /> */}
        </Fragment>
    );
}

export default NavBar;