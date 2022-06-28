import styled from "styled-components";

export const Navbar = styled.nav`
  position: sticky;
  z-index: 999;
  display: flex;
  flex-direction: row;
  width: 100%;
  top: 0;
  /* position: fixed; */
  background-image: linear-gradient(to right, #0d1b3c, #9273ea, #0d1b3c);
  padding: 1vh;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  background-color: white;
  color: #1d273d;
  font-size: large;
  font-weight: 800;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;

  :hover {
    opacity: 0.7;
    transition: 100ms ease;
  }
`;

export const DropDownBtn = styled.button`
  border-radius: 0.5rem;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  position: absolute;
  /* right: -10rem; */
  right: 2%;
  top: 2.5%;
`;

export const LeftHalf = styled.div`
  display: flex;
  width:50%;
  justify-content: center;
`;

export const RightHalf = styled.div`
  display: flex;
  width:50%;
  justify-content: center;
  gap:1rem;
` 