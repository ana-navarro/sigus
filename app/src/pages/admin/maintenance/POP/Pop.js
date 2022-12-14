import axios from 'axios';
import React, { useState, useMemo, useEffect } from 'react';
import { Title } from '../styled.style';
import { AddPop } from './AddPop';
import { Pagination } from '../../../../components/Pagination';
import { TablePop } from './Components/TablePop';
import api from '../../../../services/api';

export const Pop = () => {
  const [pop, setPop] = useState();
  const [currentPage, setCurrentPage] = useState();

  const dadoAtual = useMemo(() => {
    const firstPage = (currentPage - 1) * 10;
    const lastPage = firstPage + 10;
    return pop && pop.slice(firstPage, lastPage);
  }, [currentPage]);

  async function getPop() {
    try {
      const result = await api.get(`api/pops`);
      console.log(result.data);
      setPop(result.data);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPop();
  }, []);

  return (
    <>
      <Title>Procedimento Operacional Padrão</Title>
      <TablePop data={dadoAtual || pop} />
      {pop && (
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={pop && pop.length}
          pageSize={10}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
      <AddPop style={{ margin: '0 auto' }} />
    </>
  );
};
