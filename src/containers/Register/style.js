import styled from 'styled-components'
import BG2 from '../../assets/bg-1.svg'
import { theme } from '../../styles/theme'
import { Link as ReactLink } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 950px;
    opacity: 0.87;
    height: 500px;
    max-width: auto;
    border-radius: 10px;
    z-index: 10;
  }
`

export const Background = styled.div`
  .background {
    position: fixed;
    z-index: -1;
    width: max-content;
    height: 100%;
  }
  .conteudo-background {
    height: 100%;
    width: auto;
    opacity: 0.88;
    min-width: max-content;
    max-width: max-content;
    position: fixed;
    top: 0;
    left: 0;
  }
`

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;  
  background-image: url(${BG2});  
  background-size: cover;
  z-index: 10;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 38px;
  margin-bottom: 20px;
  font-family: Lilita One;
  color:${theme.colors.secondary};
  font-weight: 400;

  span {
    color:${theme.colors.error};
    font-family: Lilita One;
    text-shadow: 1px 1px 10px solid rgba(0, 0, 29, 0.6);
    font-size: 44px;
    font-weight: 400;
  }

  .burger {
    color:${theme.colors.secondary};
    font-family: Lilita One;
    text-shadow: 1px 1px 5px rgba(0, 0, 29, 0.6);
    font-size: 44px;
    font-weight: 400;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content:center;
  

  input {
    opacity: 0.7;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);

  }

  label {
    font-size: 2rem;
    color: ${theme.colors.secondary};
    font-family: Road Rage;
    left: 0;
    text-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: ${theme.colors.lighttext};
    font-weight: 600;
    height: 10px;
  }
`

export const Link = styled(ReactLink)`
  color:${theme.colors.secondary};
  font-size: 28px;
  text-decoration: none;
  cursor: pointer;
  padding-top: 10px;
  font-family: Road Rage;
  text-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: black;

  &:hover {
    opacity: 0.8;
  }
`

