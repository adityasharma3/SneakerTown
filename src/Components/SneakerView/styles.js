import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 25%;
    word-wrap: break-word;
    flex-wrap: wrap;
    margin: 2rem 2%;
    background-color: #1A1C36;
    text-align: center;
    padding: 2%;
    border-radius: 2rem;
    cursor: pointer;
`;

export const BottomSection = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const Button = styled.button`
    display: flex;
    background: black;
    color: wheat;
    outline: none;
    border: none;
    padding: 1rem 2rem;
    border-radius : 1rem;
    align-items: center;
    font-weight: 800;

    :hover {
        transform: scale(1.1);
        transition: 0.5s ease;
    }
`;

export const Select = styled.select`
    color: whitesmoke;
    background: black;
    outline: none;
    border: none;
    border-radius: 1rem;
    width: 25%;
    text-align: center;
`;