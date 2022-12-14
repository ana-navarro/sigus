import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import api from '../../../services/api';
import { DeleteButton, EditButton, ShowInfo, ShowName, ShowTitle, UnstyledLinks } from './styled.style'

export const ShowUser = () => {
  const [user, setUser] = useState([]);
  const { idUser } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(`/api/users/${idUser}`);
        setUser(res.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      <ShowTitle>
        <ShowName aria-label={`Administrador Nome: ${user.name}`} data-testid="show-user-name">{user.name}</ShowName>
        <EditButton data-testid='show-user-edit-btn' aria-label='Editar Administrador'>
          <UnstyledLinks to={`/user/${user._id}/edit`}>Editar</UnstyledLinks>
        </EditButton>
        <DeleteButton data-testid='show-user-delete-btn' aria-label='Excluir Administrador'>
          <UnstyledLinks to={`/user/${user._id}/delete`}>Excluir</UnstyledLinks>
        </DeleteButton>
      </ShowTitle>

      <ShowInfo>
        <p aria-label={`Administrador Email: ${user.email}`} data-testid="show-user-email">Email: {user.email}</p>
      </ShowInfo>
    </>
  );
};
