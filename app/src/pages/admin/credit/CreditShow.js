import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AddDemo, CreditButtonGroup, DeleteButton, EditButton, GerarDemo, PaymentButton, ShowInfo, ShowName, ShowTitle, UnstyledLinks } from './styled.style';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import { DemoPdf } from './demos/DemoPdf';
import { FaTimes } from "react-icons/fa";
import { PayButton } from '../../clients/PayButton';
import api from '../../../services/api';
import { Container } from '@mui/material';

export const ShowCredit = () => {
    const [credit, setCredit] = useState([]);
    const [idInstallation, setIdInstallation] = useState();
    const [installationNumber, setInstallationNumber] = useState([]);
    const [show, setShow] = useState();
    const [month, setMonth] = useState();
    const [valuePayment, setValuePayment] = useState();

    const [company, setCompany] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()

    const id = useParams();
    const getInstallationNumber = async (id) => {
        try {
            const res = await api.get(`/api/installations_numbers/${id}`)
            setInstallationNumber(res.data.numberInstallation);
            getCompanyData(res.data.idCompany);
            getAddressData(res.data.idCompany);
        } catch (error) {
            console.log(error)
        }
    }

    const getAddressData = async (id) => {
        try {
            const res = await api.get(`/api/company/${id}/address`);
            setAddress(res.data[0]);
        } catch (error) {
            console.error(error);
        }
    }

    const getCompanyData = async (id) => {
        try {
            const res = await api.get(`/api/company/${id}`);
            setCompany(res.data.company)
            setEmail(res.data.company.email)
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        try {
            const res = await api.get(`/api/credit/${id.idCredit}`);
            setCredit(res.data);
            setMonth(res.data.month);
            setValuePayment(res.data.valuePayment);
            setIdInstallation(res.data.idInstallation);
            getInstallationNumber(res.data.idInstallation);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    const handleOpenDialog = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const sendLink = async (e) => {
        e.preventDefault();
        const res = await api.post(`/api/credit/${id.idCredit}/send-demo`, email);
        if (res.status === 201) {
            toast.success("Email enviado com sucesso!")
        } else {
            toast.error("Email não foi enviado!")
        }
    }

    return (
        <>
            <ToastContainer />
            {show && (
                <Dialog
                    fullScreen
                    open={show}
                    onClose={handleClose}
                >
                    <AppBar sx={{ position: 'relative' }} style={{ background: '#060b26' }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <FaTimes />
                            </IconButton>
                            <a target='_blank'><PayButton valuePayment={valuePayment} month={month} email={email} id={credit._id} /></a>
                        </Toolbar>
                    </AppBar>
                    <Container>
                        <DemoPdf company={company} credit={credit} address={address} installationNumber={installationNumber} />
                    </Container>
                </Dialog>
            )}
            {!show && (
                <div>
                    <ShowTitle data-testid="show-credit">
                        <ShowName><UnstyledLinks to={`/installations/${idInstallation}`}>{installationNumber}</UnstyledLinks> - {credit.month}</ShowName>
                        <EditButton>
                            <UnstyledLinks
                                to={`/credit/${credit._id}/edit`}
                                aria-label={`Editar Crédito ${installationNumber} - ${credit.month}`}
                                data-testid="show-credit-edit-btn">Editar</UnstyledLinks>
                        </EditButton>
                        <DeleteButton>
                            <UnstyledLinks data-testid="show-credit-delete-btn" aria-label={`Deletar Crédito ${installationNumber} - ${credit.month}`} to={`/credit/${credit._id}/delete`}>Excluir</UnstyledLinks>
                        </DeleteButton>
                    </ShowTitle>
                    <ShowInfo>
                        <p>Energia Consumida: {credit.consumed} kWh</p>
                        <p>Distribuição: {credit.distribuition}%</p>
                        <p>Desconto: {credit.discount}%</p>
                        <p>Saldo Usado: {credit.usedBalance} kWh</p>
                        <p>Saldo Anterior: {credit.previousBalance} kWh</p>
                        <p>Saldo Atual: {credit.actualBalance} kWh</p>
                        <p>Energia Injetada: {credit.injected} kWh</p>
                        <p>Total Injetada: {credit.totalInjected} kWh</p>
                        <p>Valor do Desconto: R${credit.valueDiscount}</p>
                        <p>Valor KwH: R$ {credit.valueKwh}</p>
                        <p>Valor da Energia: R${credit.valueEnergy}</p>
                        <p>Valor de Pagamento: R${credit.valuePayment}</p>
                    </ShowInfo>

                    <div className='text-center p-4'>
                        <h6>Para criar uma demonstração é necessário ter endereço a empresa!</h6>
                    </div>

                    <div className='row p-4 text center'>
                        {address && (
                            <AddDemo onClick={handleOpenDialog}>Gerar PDF da Demo</AddDemo>

                        )}
                        <AddDemo><UnstyledLinks to={`/demo/${id.idCredit}`}>Ver Demo</UnstyledLinks></AddDemo>
                        <PaymentButton onClick={sendLink}>Enivar</PaymentButton>
                    </div>
                </div>
            )
            }
        </>
    )
}
