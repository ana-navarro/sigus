import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { HeaderAddButton, HeaderTable, HeaderTitle, Search, SearchBox, TableActionsTd, TableColumn, TableHeadActionsTh, TableHeadTh, TableRoot, TableRow, TableTd, UnstyleLink } from './styled.style';

export const Table = ({ data }) => {
    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <HeaderTable>
                <HeaderTitle aria-label='Lista de Administradores' data-testid='user-table'>Lista de Administradores:</HeaderTitle>
                <HeaderAddButton aria-label='Adicionar Administrador' data-testid='table-user-add-btn'><UnstyleLink to={'/register'}>Adicionar Admin</UnstyleLink></HeaderAddButton>
                <Search>
                    <SearchBox
                        aria-label='Pesquisar por Nome'
                        data-testid='table-user-searchbox'
                        label='Pesquise por Nome'
                        className='search'
                        variant="outlined"
                        placeholder='Pesquise pelo Nome'
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </Search>
            </HeaderTable>

            <TableRoot>
                <TableHeadTh aria-label='Nome de Administradores' data-testid='table-user-name-th'>Nome</TableHeadTh>
                <TableHeadActionsTh aria-label='Ações' data-testid='table-user-actions-th'>Ações</TableHeadActionsTh>
                {data.filter((val) => {
                    if (searchItem === "") {
                        return val;
                    } else if (val.name.includes(searchItem)) {
                        return val;
                    }
                }).map((item) => (
                    <TableRow key={item._id}>
                        <TableColumn>
                            <Link to={`/user/${item._id}`}>
                                <TableTd aria-label={`${item.name}`} data-testid='table-user-name'>{item.name}</TableTd>
                            </Link>
                        </TableColumn>
                        <TableActionsTd>
                            <Link
                                to={`/user/${item._id}/edit`}
                            >
                                <button aria-label={`Editar administrador ${item.name}`} data-testid='table-edit-btn' className="btn btn-success m-2"><FaPen /></button>
                            </Link>
                            <Link
                                to={`/user/${item._id}/delete`}
                            >
                                <button aria-label={`Excluir administrador ${item.name}`} data-testid='table-delete-btn' className="btn btn-danger"><FaTrashAlt /></button>
                            </Link>
                        </TableActionsTd>
                    </TableRow>
                ))}
            </TableRoot>
        </>
    )
}