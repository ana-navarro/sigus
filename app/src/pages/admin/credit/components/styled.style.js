import { Table, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchLabel = styled.label`
`
export const SearchBox = styled(TextField)`
    border-radius: 10px;
    padding: 8px;
`
export const Search = styled.div`
    margin: 1em;
`

export const HeaderTable = styled.div`
    display: flex;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2em;
    border-bottom: 1px solid #444;
`

export const HeaderTitle = styled.h3`
    flex-grow: 1;
    margin: 1em;
`

export const HeaderAddButton = styled.button`
    margin: 1em;
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

export const UnstyleLink = styled(Link)`
    color: inherit;
    text-decoration: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`

export const TableRoot = styled(Table)`
    margin-bottom: 4em;
    margin-top: 2em;
`

export const TableHeadTh = styled.th`
    border-bottom: 4px solid #444;
    flex-grow: 2;
    text-align: center;
`

export const TableHeadActionsTh = styled.th`
    text-align: center;
    border-bottom: 4px solid #444;
`

export const TableRow = styled.tr`
    border-bottom: 1px solid #444;
`

export const TableColumn = styled.td`
    padding: 1em;
    flex-grow: 2;
`

export const TableTd = styled.div`
    flex-grow: 2;
    text-align: center;
`

export const TableActionsTd = styled.div`
    padding: 1em;
    text-align: center;
`