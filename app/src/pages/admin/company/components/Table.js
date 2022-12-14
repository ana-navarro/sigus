import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HeaderAddButton, HeaderTable, HeaderTitle, Search, SearchBox, TableActionsTd, TableColumn, TableHeadActionsTh, TableHeadTh, TableRoot, TableRow, TableTd, UnstyleLink } from './styled.style';

export const Table = ({ data }) => {
    const [searchItem, setSearchItem] = useState('');

    const handleEdit = (id) => {
        sessionStorage.setItem('CompanyId', id);
    }

    return (
        <>
            <HeaderTable data-testid="table-company-header">
                <HeaderTitle aria-label='Lista de empresas'>Lista de Empresas</HeaderTitle>
                <HeaderAddButton data-testid="add-company-btn"><UnstyleLink to={'/company/add'}>Adicionar Empresa</UnstyleLink></HeaderAddButton>
                <Search>
                    <SearchBox
                        aria-label='Caixa de Pesquisa'
                        data-testid="company-search-box"
                        label='Pesquise por Nome'
                        className='search'
                        variant="outlined"
                        placeholder='Pesquise por Nome'
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </Search>
            </HeaderTable>

            <TableRoot data-testid="table-company">
                <TableHeadTh aria-label='Nome Empresa'>Nome</TableHeadTh>
                <TableHeadActionsTh aria-label='Ação de Deletar ou Excluir'>Ação</TableHeadActionsTh>
                {data.filter((val) => {
                    if (searchItem === "") {
                        return val;
                    } else if (val.name.includes(searchItem)) {
                        return val;
                    }
                }).map((item) => (
                    <TableRow key={item._id}>
                        <TableColumn>
                            <TableTd aria-label={`Empresa Nome: ${item.name}`} data-testid="table-company-nome">
                                <Link
                                    to={`/company/${item._id}`}
                                    data-testid="table-company-link"
                                >
                                    {item.name}
                                </Link>
                            </TableTd>
                        </TableColumn>
                        <TableActionsTd data-testid="table-company-actions">
                            <Link
                                to={`/company/${item._id}/edit`}
                            >
                                <Button
                                    aria-label={`Editar empresa: ${item.name}`}
                                    onClick={handleEdit(item._id)}
                                    data-testid="edit-company"
                                    className="btn btn-success m-2"
                                ><FaPen /></Button>
                            </Link>
                            <Link
                                to={`/company/${item._id}/delete`}
                            >
                                <Button
                                    aria-label={`Deletar empresa: ${item.name}`}
                                    className="btn btn-danger"
                                    data-testid="delete-company"
                                ><FaTrashAlt /></Button>
                            </Link>
                        </TableActionsTd>
                    </TableRow>
                ))}
            </TableRoot>
        </ >
    )
}
