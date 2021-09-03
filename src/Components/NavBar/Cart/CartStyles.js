import styled from "styled-components";

export const CartBody = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
`;

export const CompleteCart = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    width: 30vw;
    background: black;
    padding: 2vw;
    height: 100vh;
    overflow: auto;
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ShoeDisplay = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: whitesmoke;
    align-items: center;
    justify-content: space-between;
    margin: 1rem auto;
    background-color: #1D273D;
    border-radius: 2rem;

    img {
        width: 220px;
    }
`;