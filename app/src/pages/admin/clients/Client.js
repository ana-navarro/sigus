import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { TableClients } from './components/Table';
import { ToastContainer } from 'react-toastify';
import { Pagination } from '../../../components/Pagination'
import api from '../../../services/api';

export const Client = () => {
    const [clients, setClients] = useState([]);
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const fetchClients = async () => {
            const res = await api.get("/api/client");
            setClients(res.data);
        }

        fetchClients();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, []);


    const dadoAtual = useMemo(() => {
        const firstPage = (currentPage - 1) * 10;
        const lastPage = firstPage + 10;
        return clients && clients.slice(firstPage, lastPage);
    }, [currentPage]);

    return (
        <>
            <ToastContainer />
            <div>
                {<TableClients data={dadoAtual || clients} />}
            </div>
            {clients && (
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={clients && clients.length}
                    pageSize={10}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </>
    )
}
