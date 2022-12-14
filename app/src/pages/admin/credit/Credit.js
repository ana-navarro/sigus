import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { Table } from './components/Table';
import { Pagination } from '../../../components/Pagination'
import api from '../../../services/api';

export const Credit = () => {
    const [credits, setCredits] = useState([]);
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get("/api/credit");
                setCredits(response.data);
                setCurrentPage(1);
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [credits]);

    const dadoAtual = useMemo(() => {
        const firstPage = (currentPage - 1) * 10;
        const lastPage = firstPage + 10;
        return credits && credits.slice(firstPage, lastPage);
    }, [currentPage]);
    return (
        <>
            <div data-testid='credit'>
                {<Table data={dadoAtual || credits} />}
            </div>
            {credits && (
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={credits && credits.length}
                    pageSize={10}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </>
    )
}
