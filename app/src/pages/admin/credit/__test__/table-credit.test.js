import { Table } from "../components/Table";
import { waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import { CreditDelete } from '../CreditDelete'

jest.mock('axios');

const mockInstallation = [{
    id: 1,
    number: 1001
}]

const mockData = [{
    id: 1,
    consumed: 100,
    discount: 10,
    idInstallation: 1,
    month: 'Janeiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12',
    createdAt: '2022-11-01T16:34:35.962+00:00',
    updatedAt: '2022-11-01T16:38:53.097+00:00'
}]

const mockDataList = [{
    id: 1,
    consumed: 100,
    discount: 10,
    idInstallation: 1,
    month: 'Janeiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12',
    createdAt: '2022-11-01T16:34:35.962+00:00',
    updatedAt: '2022-11-01T16:38:53.097+00:00'
}, {
    id: 2,
    consumed: 100,
    discount: 10,
    month: 'Abril',
    idInstallation: 1,
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12',
    createdAt: '2022-12-04T16:34:35.962+00:00',
    updatedAt: '2022-12-04T16:38:53.097+00:00'
}, {
    id: 3,
    consumed: 100,
    discount: 10,
    idInstallation: 1,
    month: 'Fevereiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12',
    createdAt: '2022-14-02T16:34:35.962+00:00',
    updatedAt: '2022-15-02T16:38:53.097+00:00'
}]

const sut = () => render(<BrowserRouter><Table data={mockDataList} /></BrowserRouter>)

describe('Table Component', () => {
    beforeEach(async () => {
        jest.restoreAllMocks();
        await axios.get.mockResolvedValue({ data: mockInstallation });
    });

    it('should render the components', () => {
        sut();
        expect(screen.getByTestId('table-credit-add-btn')).toBeInTheDocument();
        expect(screen.getByTestId('table-credit-searchbox')).toBeInTheDocument();
        expect(screen.getByTestId('table-credit-install-th')).toBeInTheDocument();
        expect(screen.getByTestId('table-credit-actions-th')).toBeInTheDocument();
        expect(screen.getByTestId('table-credit-actions-th')).toBeInTheDocument();
    });
    it('given user clicks on one credit, should return the show credit', () => {
        sut();
        userEvent.click(screen.getByText('Janeiro'));
        waitFor(() => expect(screen.getByTestId('show-credit')).toBeInTheDocument())
    });
    it('given user clicks on edit button, should return the edit credit', () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>)
        userEvent.click(screen.getByTestId('table-credit-edit'));
        waitFor(() => expect(screen.getByTestId('credit-edit')).toBeInTheDocument())
    });
    it('given user clicks on delete button, should return the edit credit', () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>)
        userEvent.click(screen.getByTestId('table-credit-delete'));
        waitFor(() => expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument());
    });
    it('given user clicks on add button, should return the edit credit', () => {
        sut();
        userEvent.click(screen.getByTestId('table-credit-add-btn'))
        waitFor(() => expect(screen.getByTestId('add-credit')).toBeInTheDocument());
    });
    it('given user write on search box, should return the one element', () => {
        sut();
        userEvent.type(screen.getByTestId('table-credit-searchbox'), 'Janeiro');
        waitFor(() => expect(screen.getByTestId('table-credit-install-td')).toHaveLength(1))
    });
})