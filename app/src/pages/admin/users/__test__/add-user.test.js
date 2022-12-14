import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { Register } from '../../../auth/register/Register';

jest.mock('axios');

const mockData = {
    id: 1,
    name: 'Minera Engenharia 2',
    email: 'aaa@aaa.com',
}

const mockEmpty = {
    id: 1,
    name: 'Minera Engenharia 2',
    email: '',
}

describe('Register User Component', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });

    it('should render components', async () => {
        render(<BrowserRouter><Register /></BrowserRouter>)
        expect(screen.getByTestId('register-name')).toBeInTheDocument();
        expect(screen.getByTestId('register-email')).toBeInTheDocument();
        expect(screen.getByTestId('register-password')).toBeInTheDocument();
        expect(screen.getByTestId('register-confirm-password')).toBeInTheDocument();
        expect(screen.getByTestId('register-btn')).toBeInTheDocument();
    });

    it('given user let a empyt field, should render an error', async () => {
        await axios.post.mockResolvedValue({ data: mockEmpty });
        render(<BrowserRouter><Register /></BrowserRouter>);
        userEvent.type(screen.getByTestId('register-name'), 'Something')
        userEvent.type(screen.getByTestId('register-password'), 'Senha@123')
        userEvent.type(screen.getByTestId('register-confirm-password'), 'Senha@123')
        userEvent.click(screen.getByTestId('register-btn'))
        waitFor(() => expect(screen.getByText('Email não pode ser vázio!')).toBeInTheDocument())
    })

    it('given user let a empyt field, should render an error', async () => {
        await axios.post.mockResolvedValue({ data: mockEmpty });
        render(<BrowserRouter><Register /></BrowserRouter>);
        userEvent.type(screen.getByTestId('register-name'), 'Something')
        userEvent.type(screen.getByTestId('register-password'), 'Senha@123')
        userEvent.type(screen.getByTestId('register-confirm-password'), 'Senha@123')
        userEvent.click(screen.getByTestId('register-btn'))
        waitFor(() => expect(screen.getByText('Email não pode ser vázio!')).toBeInTheDocument())
    });

    it('should save company', async () => {
        await axios.post.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><Register /></BrowserRouter>);
        userEvent.click(screen.getByTestId('register-btn'))
        waitFor(() => expect(screen.getByTestId('register-btn')).not.toBeDisable());
    });
})