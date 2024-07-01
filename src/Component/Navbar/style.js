import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbarsection = styled.div`
    overflow: hidden;
    padding: 5px 0;
    position: fixed; /* Make navbar fixed */
    top: 0; /* Position it at the top */
    width: 100%; /* Make it full width */
    background: #fff; /* Background color */
    border-bottom: 1px solid black; /* Border color */
    z-index: 1000; /* Ensure it’s above other content */
`;

export const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex; /* Flexbox for layout */
    justify-content: space-between; /* Space between items */
    align-items: center; /* Center items vertically */
`;

export const Logo = styled.div`
    flex: 1; /* Take up one part of flex space */
`;

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin: 0; /* Remove default margin */
    padding-left: 10px; /* Adjust padding as needed */
`;

export const Ulist = styled.ul`
    flex: 1; /* Take up one part of flex space */
    list-style-type: none;
    padding: 0;
    margin: 0; /* Remove default margin */
    display: flex; /* Flexbox for layout */
    justify-content: flex-end; /* Align items to the right */
`;

export const ListItem = styled.li`
    display: inline-block;
    margin-left: 10px; /* Adjust spacing as needed */
`;

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424;
    }
`;

export const LINK = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424;
    }
`;
