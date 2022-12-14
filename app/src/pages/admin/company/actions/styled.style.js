import styled from 'styled-components';


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

export const FormButton = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2em;
    padding-bottom: 3em;
`