
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Table } from './components/Table';
import { CompanyContext } from '../../../context/Company';
import { ToastContainer } from 'react-bootstrap';
import { Pagination } from '../../../components/Pagination'
import api from "../../../services/api";

export const Company = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState();

    const dadoAtual = useMemo(() => {
        const firstPage = (currentPage - 1) * 10;
        const lastPage = firstPage + 10;
        return data && data.slice(firstPage, lastPage);
    }, [currentPage]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const response = await api.get("/api/company");
            setData(response.data)
            setCurrentPage(1);
        }
        fetchCompanies()
    }, []);

    const count = currentPage - (data.length)

    return (
        <>
            <ToastContainer />
            {<Table data={dadoAtual || data} data-testid='table-company' />}
            {data && (
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={data && data.length}
                    pageSize={10}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </>
    )
}
