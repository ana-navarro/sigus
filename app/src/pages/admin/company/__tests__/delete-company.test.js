import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, it } from '@jest/globals';
import userEvent from '@testing-library/user-event'
import { waitFor } from "@testing-library/react";
import { DeleteCompany } from '../DeleteCompany';

const mockData = [
    {
        id: 1,
        name: 'Minera Engenharia 1',
        email: 'aaa@aaa.com',
        phone: '(38)99999-9999',
        cnpj: '99.999.99/0001-00'
    }
]
describe('Delete Company Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the component', async () => {
        const { getByText } = await render(<BrowserRouter><DeleteCompany /></BrowserRouter>);
        expect(getByText('Você deseja realmente excluir?')).toBeTruthy();
        expect(getByText('Sim')).toBeTruthy();
        expect(getByText('Não')).toBeTruthy();
    });
    it('should not delete company', async () => {
        const { getByText } = await render(<BrowserRouter><DeleteCompany /></BrowserRouter>);
        userEvent.click(getByText('Não'));
        waitFor(() => expect(getByTestId("table-company")).toBeInTheDocument());
    })

    it('should delete company', async () => {
        const { getByText } = await render(<BrowserRouter><DeleteCompany /></BrowserRouter>);
        userEvent.click(getByText("Sim"));
        waitFor(() => expect(getByText("Excluído!")).toBeInTheDocument());
    })
})