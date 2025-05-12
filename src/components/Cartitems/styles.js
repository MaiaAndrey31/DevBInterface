import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${theme.colors.light};
    border-radius: 4px;
    background-color: ${theme.colors.secondary};
    transition:
      all 0,
      4s;
    border: none;

    &:hover {
      background-color: ${theme.colors.primary};
    }
  }
`
export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 60px;
`

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .trash {
    cursor: pointer;
    margin-right: 10px;
  }
`
