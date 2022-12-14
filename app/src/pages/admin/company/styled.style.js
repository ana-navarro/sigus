import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

export const FormBody = styled.form`
    margin-right: 1em;
    margin-left: 1em;
`

export const FormTitle = styled.h4`
    text-align: center;
    margin-bottom: 1em;
    margin-top: 1em;
`

export const FormLabel = styled.label`
    align-self: center;
    margin: 1em;
`

export const InputGroup = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2em;
`

export const FormContent = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2em;
`

export const FormButton = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2em;
    padding-bottom: 3em;
`

export const NameInput = styled(TextField)`
    flex-grow: 1;
    border-radius: 10px;
    padding: 8px;
`

export const EmailInput = styled(TextField)`
    flex-grow: 1;
    border-radius: 10px;
    padding: 8px;
`

export const EmailText = styled(TextField)`
    flex-grow: 1;
    border-radius: 10px;
    padding: 8px;
`

export const PhoneText = styled(TextField)`
    flex-grow: 1;
    padding: 8px;
`

export const CnpjInput = styled(TextField)`
    flex-grow: 1;
    border-radius: 10px;
    padding: 8px;
`

export const PhoneStyledInput = styled(InputMask)`
    flex-grow: 1;
    border-radius: 10px;
    padding: 8px;
`

export const SubmitButton = styled.button`
    flex-grow: 1;
    border-radius: 10px;
    border: 2px solid white;
    padding: 8px;
    color: white;
    background-color: #379237;
    &:hover{
        border: 2px solid #379237;
        background-color: #82CD47;
        color: #379237;
    }
`
export const CompanyShowTitle = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid #444;
    margin: 2em;
`

export const CompanyName = styled.h3`
    flex-grow: 1;
`

export const CompanyLinks = styled(Link)`
    color: inherit;
    text-decoration: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`

export const CompanyEditButton = styled.button`
    margin: 4px;
    color: white;
    background-color: green;
    border: 2px solid green;
    border-radius: 5px;
    text-decoration: none;
    &:hover{
        color: green;
        text-decoration: none;
        background-color: white;
        border: 2px solid green;
    }
`
export const CompanyDeleteButton = styled.button`
    margin: 4px;
    color: white;
    background-color: red;
    border: 2px solid red;
    border-radius: 5px;
    text-decoration: none;
    &:hover{
        color: red;
        text-decoration: none;
        background-color: white;
        border: 2px solid red;
    }
`
export const CompanyAddButton = styled.button`
    margin: 4px;
    color: white;
    background-color: blue;
    border: 2px solid blue;
    border-radius: 5px;
    text-decoration: none;
    &:hover{
        color: blue;
        text-decoration: none;
        background-color: white;
        border: 2px solid blue;
    }
`

export const CompanyButtonGroup = styled.div`
    text-align: center;
    margin-bottom: 1em;
`

export const CompanyShowInfo = styled.div`
    margin: 2em;
`