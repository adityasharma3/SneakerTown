import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    /* margin: auto 5vw; */
    flex-direction: column;
    /* border : 1px solid white; */
    margin: 2rem 1.5rem;
    padding: 1rem;
    border-radius: 2rem;
    background: #2C265C;

    h3 {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
    }

    :hover {
        transform: scale(1.1);
        transition: 0.4s ease-in-out;
    }
`;

export const Button = styled.button`
    display: flex;
    background: black;
    color: wheat;
    outline: none;
    border: none;
    padding: 1rem 2rem;
    border-radius : 1rem;
    margin : auto;

    :hover {
        transform: scale(1.1);
        transition: 0.5s ease;
    }
`;