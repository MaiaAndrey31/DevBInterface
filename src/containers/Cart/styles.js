import styled from "styled-components";
import { theme } from "../../styles/theme";
import Texture from '../../assets/texture.png'
import Background from '../../assets/bg-2.svg'



export const Container = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(rgba(41, 39, 39, 0.4),rgba(41, 39, 39, 0.4)),

url('${Background}');
`

export const Banner = styled.div`
background: url(${Texture});
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 180px;
background-size: cover;
background-position: center;
img{
    height: 180px;
}

`

export const Title = styled.h1`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: ${theme.colors.primary};
text-shadow: -2px 2px 12px rgb(19, 19, 18);
text-align: center;
position: relative;


&::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${theme.colors.primary};

}
`

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 20%;
gap: 40px;
width: 100%;
max-width: 1280px;
padding: 40px;
margin: 0 auto;
`