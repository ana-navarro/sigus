import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { EditInstallation } from '../EditInstallation';

jest.mock('axios');

const mockData = {
    id: 1,
    number: 1001,
    idCompany: '1'
}

axios.get.mockResolvedValue({ data: mockData });

describe('Edit Installation Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the components', async () => {
        await axios.put.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><EditInstallation /></BrowserRouter>);

        expect(screen.getByTestId('installation-edit-form')).toBeInTheDocument();
        expect(screen.getByTestId('installation-edit-number')).toBeInTheDocument();
        expect(screen.getByTestId('installation-edit-form-btn')).toBeInTheDocument();
    });
    it('should open edit modal', async () => {
        await axios.put.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><EditInstallation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('installation-edit-form-btn'));
        waitFor(() => expect(screen.getByText('Você deseja realmente editar?')).toBeInTheDocument())
    })
    it('should edit installation', async () => {
        await axios.put.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><EditInstallation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('installation-edit-form-btn'));
        waitFor(() => expect(screen.getByText('Você deseja realmente editar?')).toBeInTheDocument())
        userEvent.click(screen.getByText('Sim'));
        waitFor(() => expect(screen.getByText('Editado com sucesso!')).toBeInTheDocument())
    })
    it('should not edit company', async () => {
        await axios.put.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><EditInstallation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('installation-edit-form-btn'));
        waitFor(() => expect(screen.getByText('Você deseja realmente editar?')).toBeInTheDocument())
        userEvent.click(screen.getByText('Não'));
        waitFor(() => expect(screen.getByText('Editado com sucesso!')).not.toBeInTheDocument())
    })
})