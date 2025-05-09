import styled from "styled-components"


export const Container = styled.div `
.carousel-item{
    padding-right: 2rem;
}

overflow-x: hidden;

.react-multi-carousel-list{
    overflow: visible;
}
.react-multiple-carousel__arrow--left {
    left: 1rem;
    top: 0.625rem;
}

.react-multiple-carousel__arrow--right {
    right: 1rem;
    top: 0.625rem;
}

padding-left: 2.5rem;
padding-bottom: 2.5rem;

`

export const Title = styled.h2 `
font-family: 'Road Rage', sans-serif;
font-weight: 500;
font-size: 3rem;
color: #61a120;
padding-bottom: 0.8rem;
position: relative;
text-align: center;
margin:  2.5rem 0;
text-shadow: -1px 2px 8px rgb(255, 255, 255);



&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: .25rem;
    background-color: #61a120;
    text-shadow: 5px 6px 15px rgb(255, 255, 255);



}

`

