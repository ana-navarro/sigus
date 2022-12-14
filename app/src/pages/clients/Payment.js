import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Title } from './styled.style';
import StripeCheckout from "react-stripe-checkout";

export const Payment = () => {
    return (
        <>
            <ToastContainer />
            <AppBar style={{ background: '#060b26' }}>
                <Toolbar>
                    <Title><h3>SIGUS</h3></Title>
                </Toolbar>
            </AppBar>
            <StripeCheckout
                label="Conta de Luz"
                name="Minera Engenharia"
                description="Energia Solar"
                panelLabel="Energia Solar" //Submit button in modal
                amount={999}
                token={onToken}
                stripeKey={publishableKey}
                image="https://www.vidhub.co" //Pop-in header image
                billingAddress={false}
            />
        </>
    )
}
