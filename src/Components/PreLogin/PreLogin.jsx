import React, { useState } from "react";
import { ImageContainer, FormContainer, ButtonSection } from "./styles";
import LandingImage from "../assets/Landing/landing-sneaker.png";
import { projectAuth } from "../../config/firebaseConfig";
import { login } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const PreoLogin = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const registerAction = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (userDetails.email === "" || userDetails.password === "")
      return alert("please enter email & password");

    projectAuth
      .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: userDetails.userName,
          })
          .then(() => {
            dispatch(
              login({
                uid: userAuth.user.uid,
                email: userDetails.email,
                password: userDetails.password,
                displayName: userDetails.name,
              })
            );
          })
          .catch((error) => alert(error));
      });

    setUserDetails({
      userName: "",
      email: "",
      password: "",
    });
  };

  const loginAction = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (userDetails.email === "" || userDetails.password === "")
      return alert("please enter email & password");

    projectAuth
      .signInWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            password: userAuth.user.password,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error));

    setUserDetails({
      userName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <ImageContainer src={LandingImage} />

      <FormContainer>
        <h1>Hello there 👋 , welcome to SneakerTown </h1>
        <form>
          <input
            type="name"
            placeholder="Enter Username"
            value={userDetails.userName}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                userName: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              })
            }
          />

          <ButtonSection>
            <button type="submit" onClick={loginAction}>
              Sign In
            </button>

            <button type="submit" onClick={registerAction}>
              Register
            </button>
          </ButtonSection>
        </form>
      </FormContainer>
    </>
  );
};

export default PreoLogin;
