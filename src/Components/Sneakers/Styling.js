import styled from 'styled-components'

export const SneakerDisplay = styled.div`
    margin:4vw 5vw;
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    color: wheat;
`;

export const SingularProduct = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    text-align: center;
    margin: 1rem 0;
    border-radius: 1rem;
    background-color: #1D273D;
    max-width: 375px;

    img {
        max-width: 375px;
    }
`;

export const Button = styled.button`
    border-radius: 0.5rem;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    background-color: white;
    color:  #1D273D;
    font-size: large;
    font-weight: 800;

    :hover {
        opacity: 0.7;
        transition: 100ms ease;
    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: small;
    background-color: black;
    height: max-content;
    padding: 1.5vw 10vw;
    width: 60vw;
    border-radius: 2rem;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    justify-content: space-around;
`;

export const ModalSpecifics = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 60vw;
`;

export const Sizes = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0.5rem;
    margin: 2vh;
    height: min-content;
    overflow: hidden;
    width: 60vw;
    background-color: #121E42;
    border-radius: 2rem;
`;

export const Size = styled.button `
    outline: none;
    border: none;
    font-weight: 800;
    background-color: whitesmoke;
    border-radius: 25%;
    margin: 0 1rem;
    color: black;
    padding: 1rem;

    :hover {
        opacity: 0.7;
        transition: 0.2s ease-in;
    }
`;

export const ProductPrice = styled.h1 `
    background-color: whitesmoke;
    padding: 1rem 0.5rem;
    color: #121E42;
    border-radius: 1rem;
`;

export const ButtonSection2 = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 60vw;
`;