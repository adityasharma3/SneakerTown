import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-direction: column;
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
    cursor: pointer;

    :hover {
        transform: scale(1.1);
        transition: 0.5s ease;
    }
`;

export const SpanSales = styled.span`
    display: flex;
    align-items: center;
    position:absolute;
    top: 0px;
    right: -1rem;
    padding: 5px;
    background-color: red;
    border-radius:50%;
    cursor: pointer;
    text-align: center;

    :hover {
        font-size: large;
    }
`;