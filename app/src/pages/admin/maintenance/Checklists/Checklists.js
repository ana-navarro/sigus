import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../../services/api';
import { Title, Td, IconDelete, IconEdit } from '../styled.style';

export const Checklists = () => {
  const [checklists, setChecklists] = useState();
  const { idInstallations } = useParams();
  const navigate = useNavigate();

  const getInstallations = async () => {
    try {
      const result = await api.get(
        `api/technical/checklist/all/${idInstallations}`,
      );
      console.log(result.data);
      setChecklists(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInstallations();
  }, []);

  const getData = (date) => {
    let newDate = new Date(date);
    let formatData = `${newDate.getDate()}/${newDate.getMonth() + 1
      }/${newDate.getFullYear()}
      ${newDate.getHours()}:${newDate.getMinutes() < 9
        ? `0${newDate.getMinutes()}`
        : newDate.getMinutes()
      }
      `;

    return formatData;
  };

  if (checklists) {
    return (
      <>
        <Title>Checklist </Title>
        <Table striped bordered>
          <thead>
            <th>Checklist</th>
            <th>Data e Hora</th>
            <th>Opções</th>
          </thead>
          {checklists.map((item) => (
            <tbody>
              <Td
                onClick={() => {
                  navigate(
                    `/maintenance/installations/checklists/show/${item?._id}`,
                  );
                }}
              >
                {item?._id}
              </Td>
              <td>{getData(item?.createdAt)}</td>
              <td>
                <td>
                  <IconEdit
                    onClick={() =>
                      navigate(
                        `/maintenance/installations/checklists/edit/${item?._id}`,
                      )
                    }
                  />{' '}
                </td>
                <td>
                  <IconDelete
                    onClick={() =>
                      navigate(
                        `/maintenance/installations/checklists/delete/${item?._id}`,
                      )
                    }
                  />
                </td>
              </td>
            </tbody>
          ))}
        </Table>
      </>
    );
  } else {
    return 'Agurdando Dados';
  }
};
