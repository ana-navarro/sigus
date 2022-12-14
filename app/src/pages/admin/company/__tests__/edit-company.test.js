import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { EditCompany } from '../EditCompany'
import { expect, it } from '@jest/globals';
import userEvent from '@testing-library/user-event'
import { waitFor, screen } from "@testing-library/react";
import axios from 'axios';

jest.mock('axios');

const mockData = [
    {
        name: 'Minera Engenharia 1',
        email: 'aaa@aaa.com',
        phone: '(38)99999-9999',
        cnpj: '99.999.99/0001-00'
    }
]

describe('Edit Company Component', () => {
    beforeEach(() => jest.clearAllMocks());
    it('should render the component', async () => {
        render(<BrowserRouter><EditCompany /></BrowserRouter>)
        axios.get.mockResolvedValue({ data: mockData });
        expect(screen.getByTestId('edit-company-action')).toBeTruthy();
        expect(screen.getByTestId('edit-company-name')).toBeTruthy();
        expect(screen.getByTestId('edit-company-email')).toBeTruthy();
        expect(screen.getByTestId('edit-company-cnpj')).toBeTruthy();
        expect(screen.getByTestId('edit-company-phone')).toBeTruthy();
    });
    it('should open edit modal', async () => {
        render(<BrowserRouter><EditCompany /></BrowserRouter>)
        axios.get.mockResolvedValue({ data: mockData });
        userEvent.click(screen.getByTestId("edit-company-modal"));
        waitFor(() => expect(getByText("Você deseja realmente editar?")).toBeInTheDocument());
    });
    it('should edit company', async () => {
        render(<BrowserRouter><EditCompany /></BrowserRouter>)
        axios.get.mockResolvedValue({ data: mockData });
        userEvent.click(screen.getByTestId("edit-company-modal"));
        userEvent.click(screen.getByText("Sim"));
        waitFor(() => expect(screen.getByText("Editado com sucesso!")).toBeInTheDocument());
    });
    it('should not edit company', async () => {
        render(<BrowserRouter><EditCompany /></BrowserRouter>)
        axios.get.mockResolvedValue({ data: mockData });
        userEvent.click(screen.getByTestId("edit-company-modal"));
        userEvent.click(screen.getByText("Não"));
        waitFor(() => expect(screen.getByTestId("table-company")).toBeInTheDocument());
    });
})