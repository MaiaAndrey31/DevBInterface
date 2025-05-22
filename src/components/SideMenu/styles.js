import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
background-color: ${theme.colors.dark};

img {
    width: 60%;
    margin: 40px 0;
}

`

export const NavLinkContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const NavLink = styled(Link)`
display: flex;
align-items: center;
gap: 12px;
padding: 20px 28px;
text-decoration: none;
background-color: ${(props) => props.$isActive ? theme.colors.secondary : 'transparent'};

&:hover {
    background-color: ${theme.colors.secondary};
}

span{ 
    color: ${theme.colors.lighttext};
    font-family: 'Road Rage', sans-serif;
    font-size: 32px;
}
`

export const Footer = styled.footer`
width: 100%;
margin-top: auto;
span{ 
    color: ${theme.colors.lighttext};
    font-family: 'Road Rage', sans-serif;
    font-size: 24px;
}
`