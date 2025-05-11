import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
height: 40px;
background-color: ${theme.colors.secondary};
width: 100%;
display: flex;
justify-content: center;
align-items: center;
p{
    align-items: center;
    font-size: 20px;
    color: ${theme.colors.dark};
    font-family: 'Lolita One', sans-serif;
    font-weight: lighter;
}
`