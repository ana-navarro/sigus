import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { AddInstallation } from '../AddInstallation'

jest.mock('axios');

const mockData = {
    id: 1,
    number: 1001,
    idCompany: '1'
}

const mockDataEmpty = {
    id: 1,
    number: 1001,
    idCompany: '',
}

const mockCompany = [
    {
        id: 2,
        name: 'Minera Engenharia 2',
        email: 'aaa@aaa.com',
        phone: '(38)3213-6060',
        cnpj: '20.195.562/0001-45',
    },
    {
        id: 1,
        name: 'Minera Engenharia 2',
        email: 'aaa@aaa.com',
        phone: '(38)3213-6060',
        cnpj: '20.195.562/0001-45',
    }
]

describe('Add Installation Component', () => {
    beforeEach(async () => {
        await axios.get.mockResolvedValue({ data: mockCompany });
        jest.restoreAllMocks();
    });
    it('should render the component', async () => {
        const { getByTestId } = render(<BrowserRouter><AddInstallation /></BrowserRouter>);
        await axios.get.mockResolvedValue({ data: mockData });
        expect(getByTestId('add-installation-form')).toBeInTheDocument();
        expect(getByTestId('add-installation-number')).toBeInTheDocument();
        expect(getByTestId('add-installation-company')).toBeInTheDocument();
        expect(getByTestId('add-installation-submit-btn')).toBeInTheDocument();
    });
    it('given user let a empyt field, should render an error', async () => {
        await axios.post.mockResolvedValue({ data: mockDataEmpty });
        render(<BrowserRouter><AddInstallation /></BrowserRouter>);
        userEvent.type(screen.getByTestId('add-installation-number'), 1001)
        waitFor(() => expect(screen.getByTestId('add-installation-submit-btn')).toBeDisable());
    });
    it('should save company', async () => {
        await axios.post.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><AddInstallation /></BrowserRouter>);
        userEvent.type(screen.getByTestId('add-installation-number'), 1001)
        userEvent.type(screen.getByTestId('add-installation-company'), 1)
        waitFor(() => expect(screen.getByTestId('add-installation-submit-btn')).not.toBeDisable());
    });
})