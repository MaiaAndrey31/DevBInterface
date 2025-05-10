import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";


export const Container = styled.div`
width: 100%;
height: 72px;
background-color: ${theme.colors.dark};
padding: 0 56px;

`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 1280px;
margin: 0 auto;
`

export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: center;
height: 72px;

div  {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
`

export const HeaderLink = styled(Link)`

color: ${theme.colors.lighttext};
text-decoration: none;
font-size: 19px;

transition: color 300ms;

&:hover {
    color: ${theme.colors.primary};
}
`

export const Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 48px;
`

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 12px;
font-size: 18px;

div{
    flex-direction: column;
    align-items: center;
    p{
        color: ${theme.colors.lighttext};


        span {
            color: ${theme.colors.secondary};
            font-weight: 700;
            font-family: 'Lolita One', cursive;
        }

    }
}
`

export const Logout = styled.button`
color: ${theme.colors.error};
text-decoration: none;
font-size: 16px;
font-weight: 700;
background-color: transparent;
border: none;
font-family: 'Lolita One', sans-serif;
`

export const LinkContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
`