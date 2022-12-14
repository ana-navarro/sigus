import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Navigation } from '../Navigation';



describe('Navigation Component', () => {
    it('should render components', async () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        expect(screen.getByTestId('sigus-logo')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-close')).toBeInTheDocument();
        expect(screen.getByTestId('logout')).toBeInTheDocument();
        expect(screen.getByTestId('outlet')).toBeInTheDocument();
    });
    it('should logout', async () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('logout'));
        waitFor(() => expect(screen.getByTestId('login-header')).toBeInTheDocument());
    });
    it('given user clicks on sidebar, should open it', async () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('sidebar'));
        waitFor(() => expect(screen.getByText('Home')).toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Empresas')).toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Instalações')).toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Admins')).toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Crédito')).toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Manutenção')).toBeInTheDocument());
    });
    it('given user clicks on close sidebar, should close it', async () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('sidebar-close'));
        waitFor(() => expect(screen.getByText('Home')).not.toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Empresas')).not.toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Instalações')).not.toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Admins')).not.toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Crédito')).not.toBeInTheDocument());
        waitFor(() => expect(screen.getByText('Manutenção')).not.toBeInTheDocument());
    });
    it('given user clicks on sidebar link, should redirect', async () => {
        render(<BrowserRouter><Navigation /></BrowserRouter>);
        userEvent.click(screen.getByTestId('sidebar'));
        userEvent.click(screen.getByText('Empresas'));
        waitFor(() => expect(screen.getByTestId('table-company-header')))
    });
})