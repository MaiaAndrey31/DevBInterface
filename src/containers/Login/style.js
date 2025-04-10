import styled from 'styled-components'

import BG2 from '../../assets/bg-1.svg'

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  background-color: #000;
  background-image: url(${BG2});  
  z-index: 10;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 38px;
  margin-bottom: 40px;
  font-family: Lilita One;
  color: #ec8a23;
  font-weight: 400;

  span {
    color: #cc2827;
    font-family: Lilita One;
    text-shadow: 1px 1px 10px solid rgba(0, 0, 29, 0.6);
    font-size: 44px;
    font-weight: 400;
  }

  .burger {
    color: #ec8a23;
    font-family: Lilita One;
    text-shadow: 1px 1px 5px rgba(0, 0, 29, 0.6);
    font-size: 44px;
    font-weight: 400;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
    font-size: 24px;
    color: #ccc;
    font-family: Road Rage;
    left: 0;
    text-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
  }
`

export const Link = styled.a`
  color: #ec8a23;
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

export const Button = styled.button`
  width: 100%;
  height: 44px;
  
  background: #cc2827;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: Road Rage;
  font-size: 32px;
  text-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);
  box-shadow: 1px 1px 10px rgba(0, 0, 29, 0.6);


  &:hover {
    opacity: 0.8;
  }
`
