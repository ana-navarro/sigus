import { Table } from "../components/Table";
import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

const mockData = [
    {
        id: 1,
        name: 'Minera Engenharia',
        email: 'aaa@aaa.com',
        phone: '(38)99999-9999',
        cnpj: '99.999.99/0001-00'
    }
]
describe('Company Table', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the table', () => {
        const { getByTestId } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>)

        expect(getByTestId('table-company-header')).toBeTruthy();
        expect(getByTestId('table-company')).toBeTruthy();
    });
    it('show render name', () => {
        const { getByText } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>)

        expect(getByText('Minera Engenharia')).toBeTruthy();
    });

    it('should render actions buttons', () => {
        const { getByTestId } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);

        expect(getByTestId('table-company-actions')).toBeTruthy()
        expect(getByTestId('edit-company')).toBeTruthy()
        expect(getByTestId('delete-company')).toBeTruthy()
    });
    it('given user clicks on add button, should return the add company', () => {
        const { getByTestId } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        userEvent.click(getByTestId('add-company-btn'));

        waitFor(() => expect(getByTestId("add-company-form")).toBeInTheDocument());
        waitFor(() => expect(getByTestId("add-company-header")).toBeInTheDocument());
    });
    it('given user clicks on the name, should return the show company', () => {
        const { getByTestId } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        userEvent.click(getByTestId('table-company-link'));

        waitFor(() => expect(getByTestId("company-title")).toBeInTheDocument());
        waitFor(() => expect(getByTestId("company-info")).toBeInTheDocument());
    });
    it('given user clicks on the pencil, should return the edit company', async () => {
        const { getByTestId } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>)

        userEvent.click(getByTestId('edit-company'));
        waitFor(() => expect(getByTestId("edit-company-action")).toBeInTheDocument());
    });
    it('given user clicks on the trash can, should return the delete company', () => {
        const { getByText, getByTestId } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>)

        userEvent.click(getByTestId('delete-company'));

        waitFor(() => expect(getByText("Você deseja realmente excluir?")).toBeInTheDocument())
    });

    it('given user search something, should filter the table', async () => {
        const { getByTestId } = render(<BrowserRouter><Table data={mockData} /></BrowserRouter>)
        userEvent.type(getByTestId('company-search-box'), "Minera");
        waitFor(() => expect(getByTestId("table-company")).toHaveReturned(1))
    })
})