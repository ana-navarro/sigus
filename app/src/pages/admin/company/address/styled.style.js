import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const FormBody = styled.form`
    margin: 2em;
`

export const FormTitle = styled.h4`
    text-align: center;
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
    justify-content: space-between; 
`

export const FormContent = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2em;
    justify-content: space-between; 
`

export const StreetInput = styled(TextField)`
    flex-grow: 1;
    padding: 8px;
`

export const NumberInput = styled(TextField)`
    padding: 4px;
`

export const BlockInput = styled(TextField)`
    flex-grow: 1;
    padding: 4px;
`

export const MoreInfoInput = styled(TextField)`
    flex-grow: 1;
    padding: 4px;
`

export const CityInput = styled(TextField)`
    flex-grow: 1;
    padding: 4px;
`

export const StateInput = styled(TextField)`
    padding: 4px;
    margin-left: 1em;
`

export const CountryInput = styled(TextField)`
    padding: 4px;
    margin-left: 1em;
`

export const PostalCodeInput = styled.input`
    flex-grow: 1;
    padding: 1em;
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

export const AddressButtonGroup = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2em;
    padding-bottom: 3em;
`

export const AddressTitleGroup = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid #444;
    margin: 2em;
`

export const AddressName = styled.h3`
    flex-grow: 1;
`

export const AddressEditButton = styled.button`
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
export const AddressDeleteButton = styled.button`
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

export const AddressLinks = styled(Link)`
    color: inherit;
    text-decoration: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`

export const AddressShowInfo = styled.div`
    margin: 2em;
`