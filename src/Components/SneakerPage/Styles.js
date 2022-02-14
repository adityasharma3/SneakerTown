import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: min-content;
    margin: 2.5vh 10vh;
    text-align: center;
    background-color: #1A1C36;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    padding: 2rem auto;

    img {
        max-width: 30vw;
    }
`;

export const MiddleSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 1rem;
`;


export const Select = styled.select`
    color: whitesmoke;
    background: black;
    outline: none;
    border: none;
    border-radius: 1rem;
    width: 20%;
    text-align: center;
`;

export const Button = styled.button`
    display:flex;
    margin: 0.5rem 1rem;
    padding: 1rem 2rem;
    outline: none;
    border:none;
    text-align: center;
    align-items: center;
    border-radius: 1rem;
    background-color:#715DBF;
    font-weight: 800;
    font-size: 20;
    cursor: pointer;

    :hover {
        color: white;
        transform: scale(1.1);
        transition: 0.4s ease;
    }
`;

export const Story = styled.div`
    margin: 2vw auto;
    display:flex;
    flex-wrap: wrap;
    text-align: left;
    padding: 1vw 5vw ;

    p {
        font-size: large;
    }
`;