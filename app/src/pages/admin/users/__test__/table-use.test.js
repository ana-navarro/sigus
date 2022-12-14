import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { Table } from "../components/Table";

jest.mock('axios');

const mockData = [{
    _id: 1,
    name: 'Minera Engenharia 2',
    email: 'aaa@aaa.com',
}]

const mockData2 = [
    {
        _id: 1,
        name: 'Minera Engenharia 1',
        email: 'aaa@aaa.com',
    },
    {
        _id: 2,
        name: 'Minera Engenharia 2',
        email: 'aaa@aaa.com',
    },
    {
        _id: 3,
        name: 'Minera Engenharia 3',
        email: 'aaa@aaa.com',
    }
]

describe('Table User Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('should render components', async () => {
        render(<BrowserRouter><Table data={mockData2} /></BrowserRouter>);
        axios.get.mockResolvedValue({ data: mockData2 });
        expect(screen.getByTestId('user-table')).toBeInTheDocument();
        expect(screen.getByTestId('table-user-add-btn')).toBeInTheDocument();
        expect(screen.getByTestId('table-user-searchbox')).toBeInTheDocument();
        expect(screen.getByTestId('table-user-name-th')).toBeInTheDocument();
        expect(screen.getByTestId('table-user-actions-th')).toBeInTheDocument();
        expect(screen.getAllByTestId('table-user-name')).toHaveLength(3)
    })
    it('given user clicks on one user, should return the show user', async () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        axios.get.mockResolvedValue({ data: mockData });
        userEvent.click(screen.getByTestId('table-user-name'));
        waitFor(() => expect(screen.getByTestId('show-user-name').toBeInTheDocument()))
    })
    it('given user clicks on edit, should return the edit user', async () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        axios.get.mockResolvedValue({ data: mockData });
        userEvent.click((screen.getByTestId('table-edit-btn')));
        waitFor(() => expect(screen.getByTestId('edit-user-name')).toBeInTheDocument())
    })
    it('given user clicks on delete, should return the delete user', async () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        axios.get.mockResolvedValue({ data: mockData });
        userEvent.click((screen.getByTestId('table-delete-btn')));
        waitFor(() => expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument())
    })
    it('given user clicks on add, should return the add user', async () => {
        render(<BrowserRouter><Table data={mockData2} /></BrowserRouter>);
        axios.get.mockResolvedValue({ data: mockData2 });
        userEvent.click((screen.getByTestId('table-user-add-btn')));
        waitFor(() => expect(screen.getByTestId('show-user-name').toBeInTheDocument()))
    })
    it('given user types on searchbos, should return one user', async () => {
        render(<BrowserRouter><Table data={mockData2} /></BrowserRouter>);
        axios.get.mockResolvedValue({ data: mockData2 });
        userEvent.type(screen.getByTestId('table-user-searchbox'), 'Minera Engenharia 1');
        waitFor(() => expect(screen.getAllByTestId('table-user-name')).toHaveLength(1));
    })
})