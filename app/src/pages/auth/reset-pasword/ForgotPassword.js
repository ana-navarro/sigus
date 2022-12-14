import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import api from '../../../services/api';

export const ForgotPassword = () => {
    const id = useParams()
    const navigate = useNavigate()

    const [password, setPassword] = useState();

    const forgotPassword = async () => {
        const newPassword = {
            password
        }
        try {
            const res = await api.post(`/api/forgotpassword/${id.id}`, newPassword)
            toast.dismiss();
            toast.success("Senha alterada com sucesso");
            navigate('/')
        } catch (error) {
            toast.error("Deu algo errado!")
            console.log(error)
        }
    }
    return (
        <>
            <ToastContainer />
            <Container>
                <div className="card o-hidden border-3 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image" data-testid='forgot-password-img' alt='Painel Solar'></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4" aria-label='Troque a Senha' data-testid='forgot-password-header'>
                                            Troque a senha
                                        </h1>
                                    </div>
                                    <form onSubmit={forgotPassword}>
                                        <TextField
                                            aria-label='Digite a nova senha'
                                            data-testid='forgot-password-input'
                                            type={'password'}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Senha"
                                            InputLabelProps={{ shrink: true }}
                                            value={password}
                                            variant="filled"
                                            error={password === ""}
                                            helperText={password === "" ? "Senha não pode ser vázia!" : ''}
                                            label="Senha"
                                            autoComplete="new-password"
                                            fullWidth
                                            required
                                        />

                                        <div className="text-center pt-4">
                                            <button
                                                className="btn btn-primary btn-user btn-block"
                                                type="submit"
                                                disabled={!password}
                                                aria-label='Trocar para a nova senha'
                                                data-testid='forgot-password-btn'
                                            >
                                                Trocar
                                            </button>
                                        </div>

                                        <div className="text-center pt-4" aria-label='Voltar para à página inicial!' data-testid='forgot-password-go-back'>
                                            <a className="small" href="/">
                                                Voltar para a página inicial
                                            </a>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}