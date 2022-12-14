import { TextField } from "@material-ui/core";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormTitle = styled.h4`
    text-align: center;
    margin-bottom: 1em;
    margin-top: 1em;
`

export const FormBody = styled.form`
    margin: 1em;
`

export const InputGroup = styled.div`
    display: flex;
    flex-grow: 1;
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
    margin: 1em;
`

export const FormButton = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2em;
    padding-bottom: 3em;
`

export const FormLabel = styled.label`
    align-self: center;
    margin-top: 1em;
`

export const GenericInput = styled(TextField)`
    flex-grow: 1;
`

export const GenericInputEdit = styled(TextField)`
    flex-grow: 1;
`

export const GenericInputDiscout = styled(TextField)`
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

export const ShowTitle = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid #444;
    margin: 2em;
`

export const ShowName = styled.h3`
    flex-grow: 1;
`
export const UnstyledLinks = styled(Link)`
    color: inherit;
    text-decoration: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`

export const EditButton = styled.button`
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

export const DeleteButton = styled.button`
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
export const AddButton = styled.button`
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

export const PaymentButton = styled.button`
    margin: 4px;
    color: white;
    flex-grow: 1;
    padding: 8px;
    background-color: #DD5353;
    border: 2px solid #DD5353;
    border-radius: 5px;
    text-decoration: none;
    &:hover{
        color: #DD5353;
        text-decoration: none;
        background-color: white;
        border: 2px solid #DD5353;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2em;
    padding-bottom: 3em;
`

export const CreditButtonGroup = styled.div`
    text-align: center;
    margin: 1em;
    display: flex;
`

export const AddDemo = styled.button`
    margin: 4px;
    flex-grow: 1;
    color: white;
    padding: 8px;
    background-color: #060b26;
    border: 2px solid #060b26;
    border-radius: 5px;
    text-decoration: none;
    &:hover{
        color: #060b26;
        text-decoration: none;
        background-color: white;
        border: 2px solid #060b26;
    }
`

export const GerarDemo = styled.button`
    margin: 4px;
    color: white;
    padding: 8px;
    flex-grow: 1;
    background-color: #060b26;
    border: 2px solid #060b26;
    border-radius: 5px;
    text-decoration: none;
    &:hover{
        color: #060b26;
        text-decoration: none;
        background-color: white;
        border: 2px solid #060b26;
    }
`

export const ShowInfo = styled.div`
    margin: 2em;
`

export const ResponseStripe = styled(Container)`
    margin-top: 8em;
`