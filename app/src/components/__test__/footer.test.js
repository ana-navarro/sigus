import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import { expect, it } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer Element', () => {
    it('should render components', () => {
        render(<BrowserRouter><Footer /></BrowserRouter>)
        expect(screen.getByTestId('copyright-footer')).toBeInTheDocument();
    })
})