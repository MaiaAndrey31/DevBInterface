import styled from "styled-components"
import BannerHome from '../../assets/Banner.svg'
import Background from '../../assets/bg-2.svg'
import { theme } from "../../styles/theme"

export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 400px;

h1{
    font-family: 'Road Rage', sans-serif;
    font-weight: 500;
    font-size: 80px;
    color: ${theme.colors.lighttext};
    position: absolute;
    right: 10%;
    top: 20%;
}
`

export const Container = styled.section`
background: linear-gradient(rgba(41, 39, 39, 0.4),rgba(41, 39, 39, 0.4)),

url('${Background}');
height: 100%;


`

export const Content = styled.div`


`