import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CreditProvider } from './context/Credit';
import { UserProvider } from './context/User';
import { CompanyProvider } from './context/Company';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <UserProvider>
        <CompanyProvider>
          <CreditProvider>
            <App />
          </CreditProvider>
        </CompanyProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

