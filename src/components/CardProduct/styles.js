import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding: 40px;
border-radius: 8px;
background-color: ${theme.colors.light};
cursor: grab;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

div{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    p{
        font-size: 18px;
        color: ${theme.colors.secondary};
        line-height: 20px;
        font-weight: 400;
        font-family: 'Lilita one', sans-serif;
        margin-top: 40px;

    }

    strong{

        font-size: 22px;
        color: ${theme.colors.dark};
        font-weight: 600;
        line-height: 20px;


    }
}
`

export const CardImage = styled.img`
height: 100px;
position: absolute;
top: -50px;
`