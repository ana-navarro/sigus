import { DeleteInstallation } from "../DeleteInstallation";
import { waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";

jest.mock('axios');

const mockData = {
    id: 1,
    number: 1001,
    idCompany: '1'
}

describe('Delete Installation Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the component', async () => {
        render(<BrowserRouter><DeleteInstallation /></BrowserRouter>)
        expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument()
    })
    it('should not delete installation', async () => {
        render(<BrowserRouter><DeleteInstallation /></BrowserRouter>)
        expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument()
        userEvent.click(screen.getByText('Não'))
        waitFor(() => expect(screen.getByText('Excluído!')).not.toBeInTheDocument())
    })
    it('should delete installation', async () => {
        await axios.delete.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><DeleteInstallation /></BrowserRouter>)
        expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument()
        userEvent.click(screen.getByText('Sim'))
        waitFor(() => expect(screen.getByText('Excluído!')).toBeInTheDocument())
    })
})