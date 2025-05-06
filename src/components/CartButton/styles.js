import styled from "styled-components";
import { theme } from "../../styles/theme";


export const ContainerButton = styled.button`
background-color: ${theme.colors.secondary};
width: 100%;
height: 52px;
border: 0;
border-radius: 8px;
font-size: 30px;
color: ${theme.colors.light};

&:hover {
    background-color: ${theme.colors.primary};
}
`