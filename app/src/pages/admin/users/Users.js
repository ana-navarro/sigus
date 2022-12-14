import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { Table } from './components/Table';
import { Pagination } from '../../../components/Pagination'
import api from '../../../services/api';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  const getData = async () => {
    const res = await api.get('/api/users/');
    setUsers(res.data);
    setCurrentPage(1);
  };

  useEffect(() => {
    getData();
  }, []);

  const dadoAtual = useMemo(() => {
    const firstPage = (currentPage - 1) * 10;
    const lastPage = firstPage + 10;
    return users && users.slice(firstPage, lastPage);
  }, [currentPage]);


  return (
    <>
      <div>
        <div id="users" className="p-2">
          {<Table data={dadoAtual || users} />}
        </div>
        {users && (
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={users && users.length}
            pageSize={10}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </>
  );
};
