import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../context/User';
import { Container } from 'react-bootstrap';
import api from '../../../services/api';

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password }
      const res = await api.post("/api/login/", formData, {
        headers: {
          Accept: '*/*'
        }
      });

      toast.dismiss();
      toast.success(res.data.message);
      sessionStorage.setItem('x-auth-token', res.data.data);
      setCurrentUser(res.data.user);
      navigate('/');
    } catch (error) {
      toast.error("Deu algo errado!")
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <div className="card o-hidden border-3 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image" data-testid='login-img' alt='Painel Solar'></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4" data-testid='login-header' aria-label='Bem-vindo de volta'>
                      Bem-vindo de Volta!
                    </h1>
                  </div>
                  <form onSubmit={loginUser}>
                    <div className="form-group">
                      <label htmlFor="email" aria-label='Email' data-testid='login-email'>Email:</label>
                      <input
                        data-testid="login-email-input"
                        className="form-control"
                        aria-label='Adicionar Email'
                        type="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" data-testid="login-password">Senha:</label>
                      <input
                        data-testid="login-password-input"
                        className="form-control"
                        type="password"
                        aria-label='Adicionar Senha'
                        id="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </div>
                    <div className="text-center pt-4">
                      <button
                        data-testid="login-btn"
                        aria-label='Entrar no Sistema'
                        className="btn btn-primary btn-user btn-block"
                        type="submit"
                        disabled={!email || !password}
                      >
                        Entrar
                      </button>
                    </div>

                    <div className="text-center pt-4">
                      <a className="small" data-testid="login-reset-password" href="/password-reset" aria-label='Esqueceu a senha?'>
                        Esqueceu a senha?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
