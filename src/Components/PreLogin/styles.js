import styled from "styled-components";

export const ImageContainer = styled.img`
    position: relative;
    filter: brightness(40%);
    object-fit: contain;
    width: 100%;
    height: 100%;
`;

export const FormContainer = styled.div`
    background-color: rgba(0,0,0,0.65);
    position: absolute;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    border-radius: 1rem;
  
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        input {
            width: 60%;
            background-color: transparent;
            font-family: inherit;
            color: whitesmoke;
            font-size: large;
            outline: none;
            border: none;
            border-radius:5px;

            :focus {
                font-size: x-large;                
            }

        }
    }

    :hover {
        background-color: rgba(0,0,0,0.75);
        transition: 0.4s ease-in-out;
    }

`;

export const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;

    button {
        cursor: pointer;
        padding : 10px 12px;
        font-size: medium;
        font-family: inherit;
        color: whitesmoke;
        outline: none;
        border: none;
        border-radius: 5px;

        :nth-child(1) {
            background-color:#004851;
        }
    
        :nth-child(2) {
            background-color: rgb(67,41,101);
        }

        :hover {
            transition: 0.35s ease;
            transform: scale(1.1)
        }
    }
`;
