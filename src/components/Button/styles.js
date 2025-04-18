import styled from "styled-components";
import { theme } from "../../styles/theme";


export const ContainerButton = styled.button`
 width: 100%;
  height: 52px;
  
  background-color:${theme.colors.error};
  border: none;
  border-radius: 5px;
  color: ${theme.colors.lighttext};
  font-family: 'Road Rage', sans-serif;
  font-size: 30px;
  text-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);
  box-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);

  &:hover {
    opacity: 0.8;
  }

`