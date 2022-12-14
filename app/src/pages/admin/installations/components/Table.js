import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { HeaderAddButton, HeaderTable, HeaderTitle, Search, SearchBox, TableActionsTd, TableColumn, TableHeadActionsTh, TableHeadTh, TableRoot, TableRow, TableTd, UnstyleLink } from './styled.style';

export const Table = ({ data }) => {
    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <>
                <HeaderTable>
                    <HeaderTitle aria-label='Lista de Instalações' data-testid="table-installation-header">Lista de Instalações:</HeaderTitle>
                    <HeaderAddButton aria-label="Adicionar uma Nova Instação" data-testid="table-installation-add-btn"><UnstyleLink to={'/installations/add'}>Adicionar Instalação</UnstyleLink></HeaderAddButton>
                    <Search>
                        <SearchBox
                            label='Pesquise por Instalação'
                            className='search'
                            data-testid="table-installation-search"
                            variant="outlined"
                            aria-label='Pesquise pelo Instalação'
                            placeholder='Pesquise pelo Instalação'
                            onChange={(e) => setSearchItem(e.target.value)}
                        />
                    </Search>
                </HeaderTable>

                <TableRoot>
                    <TableHeadTh aria-label='Número de Instalações' data-testid="table-installation-th">Instalação</TableHeadTh>
                    <TableHeadActionsTh aria-label='Ações' data-testid="table-installation-actions-th">Ações</TableHeadActionsTh>
                    {data.filter((val) => {
                        if (searchItem === "") {
                            return val;
                        } else if (val.numberInstallation.includes(searchItem)) {
                            return val;
                        }
                    }).map((item) => (
                        <TableRow key={item._id}>
                            <TableColumn data-testid="table-installation-numberInstallation">
                                <Link to={`/installations/${item._id}`} aria-label={`${item.numberInstallation}`}>
                                    <TableTd>{item.numberInstallation}</TableTd>
                                </Link>
                            </TableColumn>
                            <TableActionsTd>
                                <Link
                                    to={`/installations/${item._id}/edit`}
                                >
                                    <button aria-label='Editar Instalação' data-testid="table-installation-edit" className="btn btn-success m-2"><FaPen /></button>
                                </Link>
                                <Link
                                    to={`/installations/${item._id}/delete`}
                                >
                                    <button aria-label='Deletar Instalação' data-testid="table-installation-delete" className="btn btn-danger"><FaTrashAlt /></button>
                                </Link>
                            </TableActionsTd>
                        </TableRow>
                    ))}
                </TableRoot>
            </>
        </>
    )
}