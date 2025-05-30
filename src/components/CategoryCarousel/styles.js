import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  .carousel-item {
    padding-right: 2rem;
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
`

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-weight: 500;
  font-size: 3rem;
  color: ${theme.colors.secondary};
  padding-bottom: 0.8rem;
  position: relative;
  text-align: center;
  margin-bottom: 2.5rem;
  text-shadow: -1px 0px 9px rgb(251, 255, 0);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 0.25rem;
    background-color: ${theme.colors.secondary};
  }
`

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 1.25rem 0.625rem;
  height: 15.625rem;
  border-radius: 1rem;

  
`

export const CategoryButton = styled(Link)`
  font-family: 'Lilita One', sans-serif;
  font-weight: 500;
  color: ${theme.colors.lighttext};
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.625rem 1.925rem;
  border-radius: 1.925rem;
  margin-top: 7.125rem;
  text-decoration: none;
  

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`
