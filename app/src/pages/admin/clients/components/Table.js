import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HeaderAddButton, HeaderTable, HeaderTitle, Search, SearchBox, TableActionsTd, TableColumn, TableHeadActionsTh, TableHeadTh, TableRoot, TableRow, TableTd, UnstyleLink } from './styled.style';


export const TableClients = ({ data }) => {
    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <HeaderTable>
                <HeaderTitle>Lista de Clientes</HeaderTitle>
                <HeaderAddButton><UnstyleLink to={'/clients/add'}>Adicionar Cliente</UnstyleLink></HeaderAddButton>
                <Search>
                    <SearchBox
                        label='Pesquise por Nome'
                        className='search'
                        variant="outlined"
                        placeholder='Pesquise por Mês'
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </Search>
            </HeaderTable>

            <TableRoot>
                <TableHeadTh>Nome</TableHeadTh>
                <TableHeadActionsTh>Ação</TableHeadActionsTh>
                {data.filter((val) => {
                    if (searchItem === "") {
                        return val;
                    } else if (val.firstName.includes(searchItem)) {
                        return val;
                    }
                }).map((item) => (
                    <TableRow key={item._id}>
                        <TableColumn>
                            <TableTd>
                                <Link
                                    to={`/clients/${item._id}`}
                                >{item.firstName}
                                </Link>
                            </TableTd>
                        </TableColumn>
                        <TableActionsTd>
                            <Link
                                to={`/clients/${item._id}/edit`}
                            >
                                <button className="btn btn-success m-2"><FaPen /></button>
                            </Link>
                            <Link
                                to={`/clients/${item._id}/delete`}
                            >
                                <button className="btn btn-danger"><FaTrashAlt /></button>
                            </Link>
                        </TableActionsTd>
                    </TableRow>
                ))}
            </TableRoot>

        </>
    )
}

