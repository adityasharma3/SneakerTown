import styled from 'styled-components';

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    top: 0;
    /* position: fixed; */
    background-image: linear-gradient(to right , #0D1B3C,#9273EA,#0D1B3C);
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

// export const SubNavBar = styled.nav`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     width: 100%;
//     height: min-content;
// `;