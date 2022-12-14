import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { CreditAdd } from '../CreditAdd'

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

const mockDataInvalid = {
    id: 1,
    consumed: '',
    discount: 10,
    month: 'Janeiro',
    previousBalance: 100,
    actualBalance: 220,
    injected: 120,
    valueKwh: 1,
    expirationDate: '2022-01-12'
}

const mockDataInstallation = {
    id: 1,
    number: 1001,
    idCompany: '1'
}

describe('Add Credit Data', () => {
    beforeEach(async () => {
        await axios.get.mockResolvedValue({ data: mockDataInstallation });
        jest.restoreAllMocks();
    });
    it('should render components', () => {
        render(<BrowserRouter><CreditAdd /></BrowserRouter>);
        expect(screen.getByTestId('add-credit')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-number')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-month')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-consumed')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-distribuition')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-discount')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-previousBalance')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-actualBalance')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-actualBalance')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-injected')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-valueKwh')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-expirationDate')).toBeInTheDocument();
        expect(screen.getByTestId('add-credit-btn')).toBeInTheDocument();
    })
    it('given an empty field, should disable button', async () => {
        await axios.post.mockResolvedValue({ data: mockDataInvalid });
        render(<BrowserRouter><CreditAdd /></BrowserRouter>);
        expect(screen.getByTestId('add-credit-btn')).toBeDisabled();
    })
    it('should save button', async () => {
        render(<BrowserRouter><CreditAdd /></BrowserRouter>);
        await axios.post.mockResolvedValue({ data: mockData });
        userEvent.click(screen.getByTestId('add-credit-btn'));
        waitFor(() => expect(screen.getByTestId('credit')).toBeInTheDocument())
    })
})