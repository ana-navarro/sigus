import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { ShowCompany } from '../ShowCompany';
import axios from 'axios';

jest.mock('axios');

const mockData = {
    id: 1,
    name: 'Minera Engenharia 1',
    email: 'aaa@aaa.com',
    phone: '(38)3213-6060',
    cnpj: '20.195.562/0001-45',
    address: {
        street: "Av. Gov. Magalhães Pinto",
        number: "2207A",
        moreInfo: "",
        block: "Alcides Rabelo",
        state: "MG",
        city: "Montes Claros",
        country: "Brasil",
        postalCode: 39401427
    }
}

const mockCompany = [
    {
        id: 2,
        name: 'Minera Engenharia 2',
        email: 'aaa@aaa.com',
        phone: '(38)3213-6060',
        cnpj: '20.195.562/0001-45',
    }
]


describe('Show Company Component', () => {
    beforeEach(() => jest.clearAllMocks());
    it('should render the components', async () => {
        const { getByTestId } = render(<BrowserRouter><ShowCompany /></BrowserRouter>);
        expect(getByTestId('company-title')).toBeInTheDocument();
        expect(getByTestId('show-company-name')).toBeInTheDocument();
        expect(getByTestId('show-company-edit-btn')).toBeInTheDocument();
        expect(getByTestId('show-company-delete-btn')).toBeInTheDocument();
        expect(getByTestId('show-company-email')).toBeInTheDocument();
        expect(getByTestId('show-company-phone')).toBeInTheDocument();
        expect(getByTestId('show-company-cnpj')).toBeInTheDocument();
    });
    it('Given user select an company with address, should render the company', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><ShowCompany /></BrowserRouter>);
        const address = await waitFor(() => screen.queryByTestId('show-company-address'));
        waitFor(() => expect(address).toBeInTheDocument());
    })
    it('Given user select an company without address, should render the company', async () => {
        axios.get.mockResolvedValue({ data: mockCompany });
        render(<BrowserRouter><ShowCompany /></BrowserRouter>);
        waitFor(() => expect(screen.getByTestId('show-company-add-address-btn')).toBeInTheDocument());
    })
    it('Given user clicks on editar, should render edit component', async () => {
        const { getByTestId } = render(<BrowserRouter><ShowCompany /></BrowserRouter>);
        userEvent.click(getByTestId('show-company-edit-btn'));
        waitFor(() => expect(getByTestId("edit-company-action")).toBeInTheDocument());
    })
    it('Given user clicks on excluir, should render delete component', async () => {
        const { getByTestId, getByText } = render(<BrowserRouter><ShowCompany /></BrowserRouter>);
        userEvent.click(getByTestId('show-company-delete-btn'));
        waitFor(() => expect(getByText("Você deseja realmente excluir?")).toBeInTheDocument())
    })
})