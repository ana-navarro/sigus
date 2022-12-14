import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Number } from '../installations/Number';
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { HeaderAddButton, HeaderTable, HeaderTitle, Search, SearchBox, TableActionsTd, TableColumn, TableHeadActionsTh, TableHeadTh, TableRoot, TableRow, TableTd, UnstyleLink } from './styled.style';

export const Table = ({ data }) => {
    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <HeaderTable>
                <HeaderTitle aria-label='Lista de Créditos'>Lista de Créditos</HeaderTitle>
                <HeaderAddButton data-testid='table-credit-add-btn' aria-label='Adicionar Crédito'><UnstyleLink to={'/credit/add'}>Adicionar Crédito</UnstyleLink></HeaderAddButton>
                <Search>
                    <SearchBox
                        data-testid='table-credit-searchbox'
                        aria-label='Pesquise por Mês'
                        label='Pesquise por Mês'
                        className='search'
                        variant="outlined"
                        placeholder='Pesquise por Mês'
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </Search>
            </HeaderTable>

            <TableRoot>
                <TableHeadTh data-testid='table-credit-install-th' aria-label='Instação e Mês'>Instação e Mês</TableHeadTh>
                <TableHeadActionsTh data-testid='table-credit-actions-th' aria-label='Ações'>Ações</TableHeadActionsTh>
                {data.filter((val) => {
                    if (searchItem === "") {
                        return val;
                    } else if (val.month.includes(searchItem)) {
                        return val;
                    }
                }).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((item) => (
                    <TableRow key={item._id}>
                        <TableColumn>
                            <TableTd>
                                <Link
                                    to={`/credit/${item._id}`}
                                    data-testid='table-credit-install-td'
                                    aria-label={`${item.idInstallation} ${item.month}`}
                                >
                                    <Number getNumber={item.idInstallation} />{item.month}
                                </Link>
                            </TableTd>
                        </TableColumn>
                        <TableActionsTd>
                            <Link
                                to={`/credit/${item._id}/edit`}
                                data-testid='table-credit-edit'
                                aria-label='Editar Crédito'
                            >
                                <button className="btn btn-success m-2"><FaPen /></button>
                            </Link>
                            <Link
                                data-testid='table-credit-delete'
                                aria-label='Deletar Crédito'
                                to={`/credit/${item._id}/delete`}
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
