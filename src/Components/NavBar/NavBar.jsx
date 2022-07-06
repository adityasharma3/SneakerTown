import React, { Fragment } from "react";
import { Navbar, Button, LeftHalf, RightHalf } from "./NavBarStyles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { projectAuth, projectFirestore } from "../../config/firebaseConfig";
import { useEffect } from "react";

const NavBar = (props) => {
  // const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector(selectUser);
  const cartItems = useSelector((state) => state.cart.items.length);

  const dispatch = useDispatch();

  const signOutAction = () => {
    dispatch(logout());
    projectAuth.signOut();
  };

  return (
    <Fragment>
      <Navbar>
        <LeftHalf>
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
        </LeftHalf>

        {!user ? null : (
          <RightHalf>
            <Button>
              <Link to="/cart">Cart</Link>
              {cartItems !== 0 && (
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
                  {cartItems}
                </p>
              )}
            </Button>
            <Button onClick={signOutAction}>Signout</Button>
          </RightHalf>
        )}
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
