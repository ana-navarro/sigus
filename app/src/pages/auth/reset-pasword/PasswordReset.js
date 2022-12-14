import { TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../services/api';

export const PasswordReset = () => {

    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    const [message, setMessage] = useState("");

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Email é necessário!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Endereço de Email Inválido", {
                position: "top-center"
            });
        } else {
            console.log(email)
            const res = await api.post("/api/reset-password", email);
            const data = await res.json();
            if (data.status === 201) {
                setEmail("");
                setMessage(true)
                navigate('/')
            } else {
                toast.error("Usúario Inválido", {
                    position: "top-center"
                })
                navigate('/')
            }
        }
    }

    return (
        <>
            <ToastContainer />
            <Container>
                <div className="card o-hidden border-3 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image" data-testid='reset-password-img' alt='Painel Solar'></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4" data-testid='reset-password-email' aria-label='Insira o Email Cadastrado'>
                                            Insira o Email Cadastrado
                                        </h1>
                                    </div>
                                    <form>
                                        {message ? <p style={{ color: "green", fontWeight: "bold" }}>Link para troca de senha enviado para o email</p> : ""}
                                        <TextField
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            data-testid='reset-password-email-input'
                                            aria-label='Campo do Email'
                                            InputLabelProps={{ shrink: true }}
                                            value={email}
                                            variant="filled"
                                            error={email === ""}
                                            helperText={email === "" ? "Email não pode ser vázio!." : ''}
                                            label="Email"
                                            autoComplete="nope"
                                            fullWidth
                                            required
                                        />
                                        <div className="text-center pt-4">
                                            <button
                                                className="btn btn-primary btn-user btn-block"
                                                onClick={sendLink}
                                                disabled={!email}
                                                data-testid='reset-password-btn'
                                                aria-label='Enviar link de Reset de senha'
                                            >
                                                Enviar
                                            </button>
                                        </div>
                                        <div className="text-center pt-4">
                                            <a className="small" href="/" data-testid='reset-password-go-back' aria-label='Voltar para página inicial'>
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