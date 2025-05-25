import styled from "styled-components";
import ReactSelect from 'react-select'
import {Button} from '../../../components'
import { theme } from "../../../styles/theme";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100%;
`
export const Form = styled.form`
border-radius: 20px;
background-color: ${theme.colors.dark};
padding: 32px;
width: 100%;
max-width: 400px;
display: flex;
flex-direction: column;
gap: 12px;
`
export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`
export const Label = styled.label`
color: ${theme.colors.light};
font-size: 14px;

`
export const Input = styled.input`
width: 100%;
height: 40px;
border-radius: 10px;
padding: 0 12px;
border: none;

`
export const LabelUpload = styled.label`
cursor: pointer;
border: 1px dashed ${theme.colors.light};
border-radius: 10px;
padding: 12px;
display: flex;
color: ${theme.colors.light};
margin: 20px 0;

> svg {
    width: 25px;
    height: 22px;
    fill: ${theme.colors.light};
    margin-right: 10px;
}
input {
    display: none;
    
}

`
export const Select = styled(ReactSelect)`

`

export const SubmitButton = styled(Button)` 
margin-top: 40px;
`

export const ErrorMessage = styled.span`
color: ${theme.colors.error};
`