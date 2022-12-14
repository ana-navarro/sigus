import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { FormBody, FormButton, FormContent, GenericInput, SubmitButton } from './styled.style'
import Swal from 'sweetalert2';
import api from '../../../services/api';

export const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const id = useParams();
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();

  const getData = async () => {
    try {
      const res = await api.get(
        `/api/users/${id.idUser}`,
      );
      setName(res.data.user.name);
      setEmail(res.data.user.email);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  async function handleSubmit(id) {
    try {
      const userObj = {
        name,
        email,
      };
      const res = await api.put(
        `/api/users/${id.idUser}/edit`,
        userObj,
      );
      toast.dismiss();
      toast.success(res.data.msg);
      navigate(`/users`);
    } catch (error) {
      console.error(error);
    }
  }

  const handleOpenModal = () => {
    Swal.fire({
      icon: 'question',
      title: 'Você deseja realmente editar?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Editado com sucesso!', '', 'success')
        handleSubmit(id);
        navigate('/users/')
      } else if (result.isDenied) {
        Swal.fire('Não foi salvo às alterações!', '', 'info')
        navigate('/users/')
      }
    }).catch((error) => console.log(error));
  };

  const showModal = () => {
    setShow(true)
  }


  return (
    <>
      <ToastContainer />
      {show && handleOpenModal()}
      {!show && (
        <div>
          <h3 className="text-center p-4" aria-label={`Editar Administrador ${name}`}>Editar Administrador</h3>
          <FormBody>
            <FormContent>
              <GenericInput
                label="Nome"
                variant='filled'
                aria-label={`Editar o nome ${name}`}
                data-testid="edit-user-name"
                value={name}
                InputLabelProps={{ shrink: true }}
                placeholder="Nome"
                inputRef={nameRef}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormContent>

            <FormContent>
              <GenericInput
                label="Email"
                variant='filled'
                aria-label={`Editar o email ${email}`}
                value={email}
                data-testid="edit-user-email"
                InputLabelProps={{ shrink: true }}
                placeholder="Email"
                inputRef={emailRef}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled
              />
            </FormContent>

            <FormButton>
              <SubmitButton onClick={showModal} aria-label="Editar" data-testid="edit-user-btn">
                Editar
              </SubmitButton>
            </FormButton>
          </FormBody>
        </div>
      )}
    </>
  );
};
