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
    width: 60%;
    color: whitesmoke;
    justify-content: space-evenly;
    margin: 1rem auto;

    img {
        width: 220px;
    }
`;

export const LeftSections = styled.div`
    display: flex;
    align-items: left;
    width :20%;
`;

export const RightSections = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    margin: auto 5%;
    width: 80%;

    h2,p {
        margin: 0;
    }
`;

export const CheckoutDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 60%;
        display: flex;
        flex-direction: column;

        input {
            background-color: #413D7F;
            color: whitesmoke;
            outline: none;
            border: none;
            height: 2rem;
            border-radius: 0.5rem;
            padding: 0.25rem;
            font-family: inherit;
        }
    }
`;

export const BillingSection = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    width:60%;
    flex-direction:column;
`;