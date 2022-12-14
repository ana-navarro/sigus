import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { Login } from '../Login'
import { ForgotPassword } from '../../reset-pasword/ForgotPassword'
import { PasswordReset } from '../../reset-pasword/PasswordReset'

jest.mock('axios');

const mockDataValidLogin = {
    email: 'minera@gmail.com',
    senha: 'Senha@123'
}

const mockDataInvalidLogin = {
    email: '',
    senha: 'Senha@123'
}

const mockDataInvalidLogin2 = {
    email: 'minera@gmail.com',
    senha: ''
}

const mockDataInvalidRest = {
    email: ''
}

const mockDataValidRest = {
    email: 'minera@gmail.com'
}

const mockDataInvalidReset2 = {
    email: 'mineragmail.com'
}

const mockDataInvalidForgot = {
    senha: ''
}

const mockDataValidForgot = {
    email: 'Senha@123'
}

describe('Login Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the components', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        expect(screen.getByTestId('login-img')).toBeInTheDocument();
        expect(screen.getByTestId('login-header')).toBeInTheDocument();
        expect(screen.getByTestId('login-email')).toBeInTheDocument();
        expect(screen.getByTestId('login-password')).toBeInTheDocument();
        expect(screen.getByTestId('login-email-input')).toBeInTheDocument();
        expect(screen.getByTestId('login-password-input')).toBeInTheDocument();
        expect(screen.getByTestId('login-btn')).toBeInTheDocument();
        expect(screen.getByTestId('login-reset-password')).toBeInTheDocument();

    })
    it('should email is invalid', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        await axios.post.mockResolvedValue({ mockDataInvalidLogin });
        expect(screen.getByTestId('login-btn')).toBeDisabled()
    })
    it('should password is invalid', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        await axios.post.mockResolvedValue({ mockDataInvalidLogin2 });
        expect(screen.getByTestId('login-btn')).toBeDisabled()
    })
    it('should login', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        await axios.post.mockResolvedValue({ mockDataValidLogin });
        waitFor(() => expect(screen.getByTestId('about-minera')).toBeInTheDocument())
        waitFor(() => expect(screen.getByTestId('about-sigus')).toBeInTheDocument())
    })
    it('given user does not know his password, go to Send Email reset link', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        userEvent.click(screen.getByTestId('login-reset-password'));
        waitFor(() => expect(screen.getByTestId('reset-password-email')).toBeInTheDocument());
    })

    describe('Reset Password Component', () => {
        it('should render the components', async () => {
            render(<BrowserRouter><PasswordReset /></BrowserRouter>);
            expect(screen.getByTestId('reset-password-img')).toBeInTheDocument();
            expect(screen.getByTestId('reset-password-email')).toBeInTheDocument();
            expect(screen.getByTestId('reset-password-email-input')).toBeInTheDocument();
            expect(screen.getByTestId('reset-password-btn')).toBeInTheDocument();
            expect(screen.getByTestId('reset-password-go-back')).toBeInTheDocument();
        })
        it('should email is empty', async () => {
            render(<BrowserRouter><PasswordReset /></BrowserRouter>);
            await axios.post.mockResolvedValue({ mockDataInvalidRest });
            expect(screen.getByTestId('reset-password-btn')).toBeDisabled()
            userEvent.click(screen.getByTestId('reset-password-btn'))
            waitFor(() => expect(screen.getByText('Email é necessário!')).toBeInTheDocument());
        })
        it('should email is invalid', async () => {
            render(<BrowserRouter><PasswordReset /></BrowserRouter>);
            await axios.post.mockResolvedValue({ mockDataInvalidReset2 });
            userEvent.click(screen.getByTestId('reset-password-btn'))
            waitFor(() => expect(screen.getByText('Endereço de Email Inválido')).toBeInTheDocument());
        })
        it('should send email', async () => {
            render(<BrowserRouter><PasswordReset /></BrowserRouter>);
            await axios.post.mockResolvedValue({ mockDataValidRest });
            userEvent.click(screen.getByTestId('reset-password-btn'))
            waitFor(() => expect(screen.getByText('Link para troca de senha enviado para o email')).toBeInTheDocument());
        })
    })

    describe('Change Password Component', () => {
        it('should render the components', async () => {
            render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
            expect(screen.getByTestId('forgot-password-img')).toBeInTheDocument();
            expect(screen.getByTestId('forgot-password-header')).toBeInTheDocument();
            expect(screen.getByTestId('forgot-password-input')).toBeInTheDocument();
            expect(screen.getByTestId('forgot-password-btn')).toBeInTheDocument();
            expect(screen.getByTestId('forgot-password-go-back')).toBeInTheDocument();
        })
        it('should password is invalid', async () => {
            render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
            await axios.post.mockResolvedValue({ mockDataInvalidForgot });
            expect(screen.getByTestId('forgot-password-btn')).toBeDisabled()
            waitFor(() => expect(screen.getByText('Senha não pode ser vázia!')).toBeInTheDocument());
        })
        it('should change password', async () => {
            render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
            await axios.post.mockResolvedValue({ mockDataValidForgot });
            waitFor(() => expect(screen.getByText('Senha alterada com sucesso')).toBeInTheDocument());
        })
    })
})

