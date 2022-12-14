import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { AddAddress } from '../address/AddAddress';
import { ShowAddress } from '../address/ShowAddress';
import axios from 'axios';
import { EditAddress } from '../address/EditAddress';
import { DeleteAddress } from '../address/DeleteAddress';

jest.mock('axios');

const mockData = [
    {
        id: 1,
        name: 'Minera Engenharia',
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
]

describe("Address Component", () => {
    beforeEach(() => jest.clearAllMocks());
    describe('Show Address Component', () => {
        it('should render componentes', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><ShowAddress /></BrowserRouter>);
            expect(screen.getByTestId('show-address-edit-btn')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-header')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-delete-btn')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-street-number')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-block')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-moreInfo')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-postalCode')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-city')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-state')).toBeInTheDocument();
            expect(screen.getByTestId('show-address-country')).toBeInTheDocument();
        });
        it('Given user clicks on editar, should render edit component', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><ShowAddress /></BrowserRouter>);
            userEvent.click(screen.getByTestId('show-address-edit-btn'))
            waitFor(() => expect(screen.getAllByTestId('edit-address-form')).toBeInTheDocument())
        });
        it('Given user clicks on excluir, should render delete component', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><ShowAddress /></BrowserRouter>);
            userEvent.click(screen.getByTestId('show-address-delete-btn'))
            waitFor(() => expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument())
        });
    })

    describe('Add Address Component', () => {
        it('should render components', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><AddAddress /></BrowserRouter>);
            expect(screen.getByTestId('add-address-header')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-cep')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-street')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-number')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-block')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-moreInfo')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-city')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-state')).toBeInTheDocument();
            expect(screen.getByTestId('add-address-country')).toBeInTheDocument();
        });
        it('should add a new address', async () => {
            render(<BrowserRouter><AddAddress /></BrowserRouter>);
            userEvent.click(screen.getByTestId('add-address-btn'))
            expect(screen.getByTestId('add-address-btn')).toBeTruthy();
        })
    })

    describe('Edit Address Component', () => {
        it('should render componentes', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><EditAddress /></BrowserRouter>);
            expect(screen.getByTestId('edit-address-form')).toBeInTheDocument();
        });
        it('should edit a address', async () => {
            render(<BrowserRouter><EditAddress /></BrowserRouter>);
            userEvent.click(screen.getByTestId('edit-address-btn'))
            expect(screen.getByTestId('edit-address-btn')).toBeTruthy();
        })
    })

    describe('Delete Address Component', () => {
        it('should render componentes', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><DeleteAddress /></BrowserRouter>);
            expect(screen.getByText("Você deseja realmente excluir?")).toBeInTheDocument()
        })
        it('should delete componentes', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><DeleteAddress /></BrowserRouter>);
            userEvent.click(screen.getByText('Sim'));
            waitFor(() => expect(screen.getByText('Excluído!')).toBeInTheDocument())
        })
        it('should not delete', async () => {
            axios.get.mockResolvedValue({ data: mockData });
            render(<BrowserRouter><DeleteAddress /></BrowserRouter>);
            userEvent.click(screen.getByText('Não'));
            waitFor(() => expect(screen.getByText('Excluído!')).not.toBeInTheDocument())
        });
    })
})
