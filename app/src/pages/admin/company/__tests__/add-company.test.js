import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { AddCompany } from "../AddCompany";
import { CreateCompanyButton } from "../actions/CreateCompany";

const mockData = [
    {
        name: 'Minera Engenharia',
        email: 'aaa@aaa.com',
        phone: '(38)99999-9999',
        cnpj: '99.999.99/0001-00'
    }
]

const props = [
    {
        name: '',
        email: 'aaa@aaa.com',
        phone: '(38)99999-9999',
        cnpj: '99.999.99/0001-00'
    }
]
describe('Add Company Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it('should render the component', () => {
        const { getByTestId } = render(<BrowserRouter><AddCompany /></BrowserRouter>);

        expect(getByTestId('add-company-header')).toBeTruthy();
        expect(getByTestId('add-company-form')).toBeTruthy();
        expect(getByTestId('company-add-name')).toBeTruthy();
        expect(getByTestId('company-add-email')).toBeTruthy();
        expect(getByTestId('company-add-phone')).toBeTruthy();
        expect(getByTestId('company-add-cnpj')).toBeTruthy();
        waitFor(() => expect(getByTestId("company-add-submit-btn")).toBeInTheDocument());
    });
    it('given user let a empyt field, should render an error', async () => {
        const { getByTestId } = render(<BrowserRouter><CreateCompanyButton {...props} /></BrowserRouter>);
        userEvent.click(getByTestId("submit-btn-add"));
        expect(getByTestId("submit-btn-add")).toBeDisabled();
    });
    it('should save company', async () => {
        const { getByTestId } = render(<BrowserRouter><CreateCompanyButton {...mockData} /></BrowserRouter>);
        userEvent.click(getByTestId("submit-btn-add"));
        expect(getByTestId("submit-btn-add")).toBeTruthy();
    });
})