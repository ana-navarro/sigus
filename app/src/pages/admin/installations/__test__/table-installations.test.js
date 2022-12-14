import { Table } from "../components/Table";
import { Installations } from "../Installations";
import { waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";

jest.mock('axios');

const mockData = [
    {
        _id: 1,
        numberInstallation: 1001,
        idCompany: 1
    }
]

const mockData2 = [
    {
        _id: 1,
        numberInstallation: 1001,
        idCompany: 1
    },
    {
        _id: 2,
        numberInstallation: 1002,
        idCompany: 1
    },
    {
        _id: 3,
        numberInstallation: 1003,
        idCompany: 1
    }
]


describe('Table Component for Installations', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('should render the componets', () => {
        render(<BrowserRouter><Table data={mockData2} /></BrowserRouter>)
        axios.get.mockResolvedValue({ data: mockData2 });
        expect(screen.getByTestId('table-installation-header')).toBeInTheDocument();
        expect(screen.getByTestId('table-installation-add-btn')).toBeInTheDocument();
        expect(screen.getByTestId('table-installation-search')).toBeInTheDocument();
        expect(screen.getByTestId('table-installation-th')).toBeInTheDocument();
        expect(screen.getByTestId('table-installation-actions-th')).toBeInTheDocument();
        expect(screen.getAllByTestId('table-installation-numberInstallation')).toHaveLength(3)
    })

    it('given user clicks on one number installation, should return the show installation', () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        userEvent.click(screen.getByText('1001'));
        waitFor(() => expect(screen.getByTestId('show-installation')).toBeInTheDocument())
    })
    it('given user clicks on edit button, should return the edit installation', () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        userEvent.click(screen.getByTestId('table-installation-edit'));
        waitFor(() => expect(screen.getByTestId('installation-edit-form')).toBeInTheDocument())
    })
    it('given user clicks on delete button, should return the delete installation', () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        userEvent.click(screen.getByTestId('table-installation-delete'));
        waitFor(() => expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument())
    })
    it('given user clicks on add button, should return the add installation', () => {
        render(<BrowserRouter><Table data={mockData} /></BrowserRouter>);
        userEvent.click(screen.getByTestId('table-installation-add-btn'));
        waitFor(() => expect(screen.getByTestId('add-installation-form')).toBeInTheDocument())
    })
    it('given user write on search box, should return the one element', () => {
        render(<BrowserRouter><Table data={mockData2} /></BrowserRouter>);
        userEvent.type(screen.getByTestId('table-installation-search'), '1001');
        waitFor(() => expect(screen.getByTestId('atable-installation-numberInstallation')).toHaveLength(1))
    })
})