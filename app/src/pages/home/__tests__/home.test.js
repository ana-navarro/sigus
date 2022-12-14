import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { waitFor } from "@testing-library/react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, jest, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios';
import { Home } from '../Home';

describe('Home Component', () => {
    it('should render components', () => {
        render(<BrowserRouter><Home /></BrowserRouter>)
        expect(screen.getByTestId('about-minera')).toBeInTheDocument();
        expect(screen.getByTestId('about-minera-logo')).toBeInTheDocument();
        expect(screen.getByTestId('about-minera-text')).toBeInTheDocument();
        expect(screen.getByTestId('about-minera-functions')).toBeInTheDocument();
        expect(screen.getByTestId('about-sigus-header')).toBeInTheDocument();
        expect(screen.getByTestId('about-sigus')).toBeInTheDocument();
    });
})