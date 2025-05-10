import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  position: relative;
`

export const Button = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
font-size: 15px;
font-family: 'Lolita One', sans-serif;
font-weight: 700;
  color: ${theme.colors.light};
  position: absolute;
  top: -80%;
  left: 65%;
  img {
    height: 20px;
    width: 90px;
    color: ${theme.colors.lighttext};
  }
`
