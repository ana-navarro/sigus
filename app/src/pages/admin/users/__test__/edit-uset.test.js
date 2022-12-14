import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { EditUser } from '../EditUser';

jest.mock('axios');

const mockData = {
    id: 1,
    name: 'Minera Engenharia 2',
    email: 'aaa@aaa.com',
}

describe('Edit User Component', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
    });
    it('should render component', async () => {
        render(<BrowserRouter><EditUser /></BrowserRouter>);
        expect(screen.getByTestId('edit-user-name')).toBeInTheDocument();
        expect(screen.getByTestId('edit-user-email')).toBeInTheDocument();
        expect(screen.getByTestId('edit-user-btn')).toBeInTheDocument();
    })
    it('should open modal', async () => {
        render(<BrowserRouter><EditUser /></BrowserRouter>);
        userEvent.click(screen.getByTestId('edit-user-btn'));
        expect(screen.getByText('Você deseja realmente editar?')).toBeInTheDocument();
    })
    it('should not edit user', async () => {
        render(<BrowserRouter><EditUser /></BrowserRouter>);
        userEvent.click(screen.getByTestId('edit-user-btn'));
        userEvent.click(screen.getByText('Não'));
        waitFor(() => expect(screen.getByText('Não foi salvo às alterações!')).toBeInTheDocument());
    })
    it('should edit user', async () => {
        render(<BrowserRouter><EditUser /></BrowserRouter>);
        await axios.put.mockResolvedValue({ data: mockData });
        userEvent.click(screen.getByTestId('edit-user-btn'));
        userEvent.click(screen.getByText('Sim'));
        waitFor(() => expect(screen.getByText('Editado com sucesso!')).toBeInTheDocument());
    })
})