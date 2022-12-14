import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import { Table } from './components/Table';
import { Pagination } from '../../../components/Pagination'
import api from '../../../services/api';

export const Installations = () => {
    const [installations, setInstallations] = useState([]);
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const fetchInstallations = async () => {
            const res = await api.get(`/api/installations_numbers`);
            setInstallations(res.data);
            setCurrentPage(1);
        }
        fetchInstallations();
    }, []);

    const dadoAtual = useMemo(() => {
        const firstPage = (currentPage - 1) * 10;
        const lastPage = firstPage + 10;
        return installations && installations.slice(firstPage, lastPage);
    }, [currentPage]);


    return (
        <>
            <ToastContainer />
            <div>
                {<Table data={dadoAtual || installations} data-testid="installation-table" />}
            </div>
            {installations && (
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={installations && installations.length}
                    pageSize={10}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </>
    )
}
