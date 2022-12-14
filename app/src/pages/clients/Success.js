import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Title } from './styled.style';
import { ToastContainer } from 'react-toastify';
import success from './img/success.jpg'
import { ResponseStripe, UnstyledLinks } from '../admin/credit/styled.style';

export const Success = () => {
    return (
        <>
            <ToastContainer />
            <AppBar style={{ background: '#060b26' }}>
                <Toolbar>
                    <Title><UnstyledLinks to={'/'}><h3 aria-label='SIGUS'>SIGUS</h3></UnstyledLinks></Title>
                </Toolbar>
            </AppBar>
            <ResponseStripe>
                <div className='text-center'><h3 aria-label='Pagamento Realizado Com Sucesso!'>Pagamento realizado com sucesso!</h3></div>
                <img src={success} className="img-fluid" alt='pagamento realizado com sucesso!' />
            </ResponseStripe>
        </>
    )
}
