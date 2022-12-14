import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { ShowInstallation } from '../ShowInstallation';

jest.mock('axios');

const mockData = {
    id: 1,
    number: 1001,
    idCompany: '1'
}

describe('Show Installation Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the componentes', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><ShowInstallation /></BrowserRouter>);
        expect(screen.getByTestId('show-installation')).toBeInTheDocument();
        expect(screen.getByTestId('show-installation-edit-btn')).toBeInTheDocument();
        expect(screen.getByTestId('show-installation-delete-btn')).toBeInTheDocument();
        expect(screen.getByTestId('show-installation-company')).toBeInTheDocument();
    });
    it('Given user clicks on edit btn, should render edit component', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><ShowInstallation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('show-installation-edit-btn'))
        waitFor(() => expect(screen.getByTestId('installation-edit-form')).toBeInTheDocument())
    })
    it('Given user clicks on delete btn, should render delete component', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><ShowInstallation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('show-installation-delete-btn'))
        waitFor(() => expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument())
    })
})