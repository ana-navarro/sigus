import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { DeleteUser } from '../DeleteUser'

jest.mock('axios');

const mockData = {
    id: 1,
    name: 'Minera Engenharia 2',
    email: 'aaa@aaa.com',
}

describe('Delete User Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the component', () => {
        render(<BrowserRouter><DeleteUser /></BrowserRouter>)
        expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument()
    })
    it('should not delete user', () => {
        render(<BrowserRouter><DeleteUser /></BrowserRouter>)
        expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument()
        userEvent.click(screen.getByText('Não'))
        waitFor(() => expect(screen.getByText('Excluído!')).not.toBeInTheDocument())
    })
    it('should delete user', async () => {
        render(<BrowserRouter><DeleteUser /></BrowserRouter>)
        await axios.delete.mockResolvedValue({ data: mockData });
        expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument()
        userEvent.click(screen.getByText('Sim'));
        waitFor(() => expect(screen.getByText('Excluído!')).toBeInTheDocument())
    })
});