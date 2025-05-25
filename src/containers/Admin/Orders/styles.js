import styled from "styled-components";
import Select from 'react-select'
import {theme} from '../../../styles/theme'


export const ProductImage = styled.img`
height: 80px;
padding: 12px;
border-radius:16px;
`


export const SelectStatus = styled(Select)`
width: 200px;
`


export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 30px;
`

export const FilterOption = styled.button`
font-family: 'Poppins', sans-serif;
cursor: pointer;
background: ${(props) => props.$isActive ? ` ${theme.colors.secondary}` : 'none'};
border: none;
color: ${(props) => props.$isActive ? ` ${theme.colors.dark}` : `${theme.colors.light}`};;
font-weight: ${(props) => props.$isActive ? 600 : 400};
font-size: 18px;
line-height: 20px;
padding: 5px 15px;
border-radius: 20px;
`