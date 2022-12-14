import { waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import { CreditDelete } from '../CreditDelete'
import { Table } from "../components/Table";

jest.mock('axios');

const mockData = {
    id: 1,
    consumed: 100,
    discount: 10,
    month: 'Janeiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12'
}

const mockDataList = [{
    id: 1,
    consumed: 100,
    discount: 10,
    month: 'Janeiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12',
    createdAt: '2022-11-03T16:34:35.962+00:00',
    updatedAt: '2022-11-03T16:38:53.097+00:00'
}, {
    id: 2,
    consumed: 100,
    discount: 10,
    month: 'Janeiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12',
    createdAt: '2022-12-03T16:34:35.962+00:00',
    updatedAt: '2022-12-03T16:38:53.097+00:00'
}, {
    id: 3,
    consumed: 100,
    discount: 10,
    month: 'Janeiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12',
    createdAt: '2022-14-03T16:34:35.962+00:00',
    updatedAt: '2022-15-03T16:38:53.097+00:00'
}]

const table = render(<BrowserRouter><Table data={mockDataList} /></BrowserRouter>)

describe('Delete Credit Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the component', () => {
        render(<BrowserRouter><CreditDelete /></BrowserRouter>);
        expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument();
        expect(screen.getByText('Sim')).toBeInTheDocument();
        expect(screen.getByText('Não')).toBeInTheDocument();
    })
    it('should not delete credit', async () => {
        render(<BrowserRouter><CreditDelete /></BrowserRouter>);
        userEvent.click(screen.getByText('Não'))
        waitFor(() => expect(screen.getByText('Excluído!')).not.toBeInTheDocument())
    })
    it('should delete credit', async () => {
        render(<BrowserRouter><CreditDelete /></BrowserRouter>);
        await axios.delete.mockResolvedValue({ mockData })
        userEvent.click(screen.getByText('Sim'))
        waitFor(() => expect(screen.getByText('Excluído!')).toBeInTheDocument())
        waitFor(() => expect(table).toHaveLength(2))
    })
})