import styled from "styled-components";

export const StyledMenuOptions = styled.div`
    display : flex;
    width: 100vw;
    background-image: linear-gradient(to right , #0D1B3C,#9273EA,#0D1B3C);
    justify-content: space-around;
    padding: 1rem;

    h3 {
        color: wheat;
    }

    ul {
        display: inline-flex;
        list-style: none;
    }
`;

export const MenuButton = styled.button`
    display: block;
    padding: .25rem 1rem;
    border-radius: 1rem;
    background-color: black;
    outline: none;
    border:none;
    cursor: pointer;
`;