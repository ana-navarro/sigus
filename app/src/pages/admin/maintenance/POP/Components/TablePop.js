import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { IconDelete, IconOpen } from '../../styled.style';
import { DeletePop } from '../DeletePop';

export const TablePop = (props) => {
  const { data } = props;
  const [cod, setCod] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (data) {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <th>Nome</th>
            <th>Abrir</th>
            <th>Excluir</th>
          </thead>

          {data.map((item) => (
            <tbody key={item?._id}>
              <td>{item?.name}</td>
              <td>
                <a href={item?.url}>
                  <IconOpen href={item?.url} />
                </a>
              </td>
              <td>
                <IconDelete
                  onClick={() => {
                    setCod(item?._id);
                    handleShow();
                  }}
                />
              </td>
            </tbody>
          ))}
        </Table>
        {show && <DeletePop cod={cod} />}
      </div>
    );
  } else {
    <p>Nenhum POP adicionado</p>;
  }
};
