import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { ShowUser } from '../ShowUser'

jest.mock('axios');

const mockData = {
    id: 1,
    name: 'Minera Engenharia 2',
    email: 'aaa@aaa.com',
}

describe('Show User Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render components', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><ShowUser /></BrowserRouter>);
        expect(screen.getByTestId('show-user-edit-btn')).toBeInTheDocument();
        expect(screen.getByTestId('show-user-delete-btn')).toBeInTheDocument();
        expect(screen.getByTestId("show-user-email")).toBeInTheDocument();
        expect(screen.getByTestId("show-user-name")).toBeInTheDocument();
    })
    it('Given user clicks on edit btn, should render edit component', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><ShowUser /></BrowserRouter>);
        userEvent.click(screen.getByTestId('show-user-edit-btn'));
        waitFor(() => expect(screen.getByTestId('edit-user-name')).toBeInTheDocument());
    })
    it('Given user clicks on delete btn, should render delete component', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        render(<BrowserRouter><ShowUser /></BrowserRouter>);
        userEvent.click(screen.getByTestId('show-user-delete-btn'));
        waitFor(() => expect(screen.getByText('Você deseja realmente excluir?')).toBeInTheDocument());
    })
})