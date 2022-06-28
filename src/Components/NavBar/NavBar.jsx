import React, { Fragment } from "react";
import { Navbar, Button } from "./NavBarStyles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Fragment>
      <Navbar>
        <Link
          to="/"
          style={{
            display: "flex",
            fontSize: "25px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          SneakerTown
        </Link>
        <Button>
          <Link to="/cart">Cart</Link>
          {cartItems.length !== 0 && (
            <p
              style={{
                margin: "0",
                marginLeft: "1rem",
                background: "red",
                padding: " 0 0.35rem",
                borderRadius: "50%",
                color: "whitesmoke",
                cursor: "pointer",
                width: "min-content",
              }}
            >
              {cartItems.length}
            </p>
          )}
        </Button>

        {/* <Button>Login/Signup</Button> */}
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
