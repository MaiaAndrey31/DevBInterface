import styled from "styled-components";
import MenuBg from '../../assets/MenuBg.svg'
import { theme } from "../../styles/theme";
import Background from '../../assets/bg-2.svg'
import { Link } from "react-router-dom";


export const Container = styled.div`
width: 100%;
height: 100%;
background-color: ${theme.colors.dark};
background:linear-gradient(rgba(41, 39, 39, 0.4),rgba(41, 39, 39, 0.4)), url('${Background}');


`

export const Banner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 380px;
width: 100%;
margin-bottom: 50px;
background: url('${MenuBg}') no-repeat;
background-position: center;
background-size: cover;
position: relative;
background-color: ${theme.colors.backgound};

h1{
    font-family: 'Road Rage', sans-serif;
    font-weight: 400;
    font-size: 80px;
    line-height: 65px;
    color: ${theme.colors.lighttext};
    position: absolute;
    right: 10%;
    top: 15%;

    span {
        display: block;
        font-size: 25px;
        font-weight: 600;
        font-family: 'Lolita One', sans-serif;
        color: ${theme.colors.secondary};

    }

}


`

export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
margin-bottom: 20px;

`
export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color: ${ (props) => props.$isActiveCategory ? `${theme.colors.error}` : `${theme.colors.secondary}`};
font-size: 28px;
font-weight: 800;
font-family: 'Lolita One', sans-serif;
padding-bottom: 8px;
line-height: 20px;
border: none;
border-bottom: ${ (props) => props.$isActiveCategory &&  `solid 3px ${theme.colors.error}`};
text-shadow: -1px 0px 9px rgb(229, 255, 0);

`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 60px;
padding: 40px;
justify-content: center;
max-width: 1280px;
margin: 50px, auto;

`

