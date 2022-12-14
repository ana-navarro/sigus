import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { ButtonGroup, FormBody, FormTitle, GenericInput, InputGroup, SubmitButton } from './styled.style'

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const userObj = {
        name,
        email,
        password,
        confirmPassword,
      };
      try {
        const response = await api.post(
          '/api/register',
          userObj,
        );
        console.log(response.msg)
        toast.dismiss();
        toast.success(response.msg);
        navigate('/users');
      } catch (err) {
        toast.error('Deu algum erro!');
        console.log(err);
      }
    } else {
      toast.error('Senha e Confirmar Senha estão diferentes!');
    }
  };

  return (
    <>
      <ToastContainer />
      <FormBody>
        <FormTitle aria-label="Adicionar Usuário">Adicionar novo Admin:</FormTitle>

        <InputGroup>
          <GenericInput
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            InputLabelProps={{ shrink: true }}
            aria-label="Nome do Administrador"
            value={name}
            data-testid="register-name"
            variant="filled"
            error={name === ""}
            helperText={name === "" ? "Nome não pode ser vázio!." : ''}
            label="Nome"
            fullWidth
            required
          />
        </InputGroup>

        <InputGroup>
          <GenericInput
            type="email"
            data-testid="register-email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            InputLabelProps={{ shrink: true }}
            value={email}
            variant="filled"
            aria-label="Email ao Administrador"
            error={email === ""}
            helperText={email === "" ? "Email não pode ser vázio!." : ''}
            label="Email"
            autoComplete="nope"
            fullWidth
            required
          />
        </InputGroup>

        <InputGroup>
          <GenericInput
            type={'password'}
            data-testid="register-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            InputLabelProps={{ shrink: true }}
            value={password}
            aria-label="Senha do Administrador"
            variant="filled"
            error={password === ""}
            helperText={password === "" ? "Senha não pode ser vázia!." : ''}
            label="Senha"
            autoComplete="new-password"
            fullWidth
            required />
        </InputGroup>

        <InputGroup>
          <GenericInput
            type={'password'}
            data-testid="register-confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar Senha"
            InputLabelProps={{ shrink: true }}
            value={confirmPassword}
            variant="filled"
            aria-label="Confirmar Senha do Administrador"
            error={confirmPassword === ""}
            helperText={confirmPassword === "" ? "Confirmar Senha não pode ser vázio!." : ''}
            label="Confirmar Senha"
            autoComplete="new-password"
            fullWidth
            required />
        </InputGroup>

        <ButtonGroup>
          <SubmitButton data-testid="register-btn" aria-label="Adicionar Administrador" onClick={handleSubmit} disabled={!name || !email || !password || !confirmPassword}>Criar Admin</SubmitButton>
        </ButtonGroup>
      </FormBody>
    </>
  );
};
