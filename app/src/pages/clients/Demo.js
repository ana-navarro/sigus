import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getStripe } from '../../lib/getStripe'
import { Container, ToastContainer } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StripeCheckout from "react-stripe-checkout";
import { BackgroundBlock, Block, BlockCompany, BlockInfo, ContentBlock, HeaderBlock, HeaderBlockInfo, RowCompany, RowInfo, TitleBlock, Title, PaymentButton } from './styled.style';
import InjectedCheckoutForm, { CheckoutForm } from './CheckoutForm';
import { Dialog } from '@mui/material';
import { PayButton } from './PayButton';
import { UnstyledLinks } from '../admin/credit/styled.style';
import api from '../../services/api';

export const Demo = () => {
    const id = useParams();
    const [month, setMonth] = useState();
    const [previousBalance, setPreviousBalance] = useState();
    const [actualBalance, setActualBalance] = useState();
    const [injected, setInjected] = useState();
    const [expirationDate, setExpirationDate] = useState();
    const [totalInjected, setTotalInjected] = useState();
    const [valueEnergy, setValueEnergy] = useState();
    const [valuePayment, setValuePayment] = useState();
    const [valueDiscount, setValueDiscount] = useState();
    const [discount, setDiscount] = useState();

    const [idCompany, setIdCompany] = useState();
    const [company, setCompany] = useState();
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [moreInfo, setMoreInfo] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [block, setBlock] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [credit, setCredit] = useState({});
    const [email, setEmail] = useState();

    const [idInstallationNumber, setIdInstallationNumber] = useState();
    const [numberInstallation, setNumberInstallation] = useState();

    const navigate = useNavigate();

    const publicKey = "pk_live_51KrQIfK3T09oXMI1PUPYlIE25cx1ZhpW6B776J8wdMIltXtiLYWx9O4e5xs2zLwAKTip9VHaZMGiogWSwMlIrlJE00u51TCxEk"

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`/api/credit/${id.id}`);
                setMonth(res.data.month);
                setCredit(res.data);
                setIdInstallationNumber(res.data.idInstallation);
                setPreviousBalance(res.data.previousBalance);
                setActualBalance(res.data.actualBalance);
                setInjected(res.data.injected);
                setTotalInjected(res.data.totalInjected);
                setValueEnergy(res.data.valueEnergy);
                setDiscount(res.data.discount);
                setValueDiscount(res.data.valueDiscount);
                setValuePayment(res.data.valuePayment);
                setExpirationDate(res.data.expirationDate);
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, []);

    useEffect(() => {
        const getNumberInstallation = async () => {
            try {
                const res = await api.get(`/api/installations_numbers/${idInstallationNumber}`);
                setNumberInstallation(res.data.numberInstallation);
                setIdCompany(res.data.idCompany);
            } catch (error) {
                console.log(error)
            }
        }
        getNumberInstallation()
    }, [idInstallationNumber]);

    useEffect(() => {
        const getCompanyData = async () => {
            try {
                const res = await api.get(`/api/company/${idCompany}`);
                setCompany(res.data.company);
                setEmail(res.data.company.email);
                setName(res.data.company.name);
                setCnpj(res.data.company.cnpj);
                getAddressData()
            } catch (error) {
                console.log(error)
            }
        }
        getCompanyData()
    }, [idCompany]);

    const getAddressData = async () => {
        try {
            const res = await api.get(`/api/company/${idCompany}/address`);
            setStreet(res.data[0].street);
            setNumber(res.data[0].number);
            setBlock(res.data[0].block);
            setMoreInfo(res.data[0].moreInfo);
            setCity(res.data[0].city);
            setState(res.data[0].state);
            setCountry(res.data[0].country);
            setPostalCode(res.data[0].postalCode);
        } catch (error) {
            console.error(error);
        }
    }

    const makePayment = async () => {
        const stripe = await getStripe();
        const { token } = await stripe.createToken();

        const body = {
            credit,
            email,
            token,
        }

        return await api.post(`/api/stripe/payment`, body)
            .then(response => {
                console.log("response ", response);
                const { status } = response;
                console.log("Staus ", status);
                response.json();
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            <ToastContainer />
            <AppBar style={{ background: '#060b26' }}>
                <Toolbar>
                    <Title><Title><UnstyledLinks to={'/'}><h3 aria-label='SIGUS'>SIGUS</h3></UnstyledLinks></Title></Title>
                    <PayButton aria-label='Pagar' valuePayment={valuePayment} month={month} email={email} id={credit._id} data-testid='demo-pay-btn' />
                    {/* <StripeCheckout
                        label="Minera Engenharia - Energia Solar"
                        name="Minera Engenharia - Energia Solar"
                        description="Minera Engenharia - Energia Solar"
                        panelLabel={`Pagar:`}
                        currency="BRL"
                        amount={(valuePayment + 1) * 100}
                        token={makePayment}
                        stripeKey={publicKey}
                        image="https://api.renovigi.com.br/upload/images/VaUzQfsOCSPkgrl7EdWVHVxMoYFY5dMPGBk3wzQ592rM6hhQbfOdYFHpTPHquio36BuxfzOgfKjdzGDF2gj4am"
                    /> */}
                </Toolbar>
            </AppBar>
            <Container>
                <Block>
                    <BackgroundBlock>
                    </BackgroundBlock>
                    <HeaderBlock>
                        <div className="col"><img src={'https://api.renovigi.com.br/upload/images/VaUzQfsOCSPkgrl7EdWVHVxMoYFY5dMPGBk3wzQ592rM6hhQbfOdYFHpTPHquio36BuxfzOgfKjdzGDF2gj4am'} className="img-fluid" alt='minera-logo' data-testid='demo-logo-1' /></div>
                        <div className="col text-center">
                            <HeaderBlockInfo data-testid='demo-minera'>
                                <RowCompany aria-label='Minera Engenharia LTDA'><strong>MINERA ENGENHARIA LTDA</strong></RowCompany>
                                <RowCompany aria-label='Av. Gov. Magalhães Pinto, 2207 A - Alcides Rabelo'>Av. Gov. Magalhães Pinto, 2207 A - Alcides Rabelo</RowCompany>
                                <RowCompany aria-label='Montes Claros - MG'>Montes Claros - MG</RowCompany>
                                <RowCompany aria-label='CEP: 39401-427'>CEP: 39401-427</RowCompany>
                                <RowCompany aria-label='CNPJ: 20.195.562/0001-45'>CNPJ: 20.195.562/0001-45</RowCompany>
                            </HeaderBlockInfo>
                        </div>
                        <div className="col"><img src={'https://api.renovigi.com.br/upload/images/VaUzQfsOCSPkgrl7EdWVHVxMoYFY5dMPGBk3wzQ592rM6hhQbfOdYFHpTPHquio36BuxfzOgfKjdzGDF2gj4am'} className="img-fluid" alt='minera-logo' data-testid='demo-logo-2' /></div>
                    </HeaderBlock>
                    <BlockCompany data-testid='demo-company'>
                        <RowCompany aria-label={`${name}`}><strong>{name}</strong></RowCompany>
                        <RowCompany aria-label={`${street}, ${number} - ${block}`}>{street}, {number} - {block}</RowCompany>
                        <RowCompany aria-label={`${moreInfo}`}>{moreInfo}</RowCompany>
                        <RowCompany aria-label={`${city}, ${state} - ${country}`}>{city} - {state} - {country}</RowCompany>
                        <RowCompany aria-label={`${postalCode}`}>{postalCode}</RowCompany>
                        <RowCompany aria-label={`${cnpj}`}>{cnpj}</RowCompany>
                    </BlockCompany>
                    <div>
                        <RowInfo data-testid='demo-installation'>
                            <div className="col" aria-label={`Mês de Referência ${month}`}><BlockInfo><TitleBlock>Mês de Referência</TitleBlock><ContentBlock>{month}</ContentBlock></BlockInfo></div>
                            <div className="col" aria-label={`Número de Instalação ${numberInstallation}`}><BlockInfo><TitleBlock>Número de Instalação</TitleBlock><ContentBlock>{numberInstallation}</ContentBlock></BlockInfo></div>
                        </RowInfo>
                        <RowInfo data-testid='demo-balance'>
                            <div className="col" aria-label={`Balanço Anterior ${previousBalance}`}><BlockInfo><TitleBlock>Balanço Anterior</TitleBlock><ContentBlock>{previousBalance}</ContentBlock></BlockInfo></div>
                            <div className="col" aria-label={`Balanço Atual ${actualBalance}`}><BlockInfo><TitleBlock>Balanço Atual</TitleBlock><ContentBlock>{actualBalance}</ContentBlock></BlockInfo></div>
                            <div className="col" aria-label={`Injetada ${injected}`}><BlockInfo><TitleBlock>Injetada</TitleBlock><ContentBlock>{injected}</ContentBlock></BlockInfo></div>
                        </RowInfo>
                        <RowInfo data-testid='demo-injected'>
                            <div className="col" aria-label={`Total Injetada ${totalInjected}`}><BlockInfo><TitleBlock>Total Injetada</TitleBlock><ContentBlock>{totalInjected}</ContentBlock></BlockInfo></div>
                            <div className="col" aria-label={`Valor da Energia ${valueEnergy}`}><BlockInfo><TitleBlock>Valor da Energia</TitleBlock><ContentBlock>{valueEnergy}</ContentBlock></BlockInfo></div>
                            <div className="col" aria-label={`Desconto ${discount}`}><BlockInfo><TitleBlock>Desconto</TitleBlock><ContentBlock>{discount}</ContentBlock></BlockInfo></div>
                        </RowInfo>
                        <RowInfo data-testid='demo-discount'>
                            <div className="col" aria-label={`Valor do Desconto ${valueDiscount}`}><BlockInfo><TitleBlock>Valor do Desconto</TitleBlock><ContentBlock>{valueDiscount}</ContentBlock></BlockInfo></div>
                            <div className="col" aria-label={`Data de Vencimento ${expirationDate}`}><BlockInfo><TitleBlock>Data de Vencimento</TitleBlock><ContentBlock>{expirationDate}</ContentBlock></BlockInfo></div>
                        </RowInfo>
                        <RowInfo data-testid='demo-payment'>
                            <div className="col"><BlockInfo><TitleBlock>Valor do Pagamento</TitleBlock><ContentBlock>{valuePayment + 1}</ContentBlock></BlockInfo></div>
                        </RowInfo>
                    </div>
                </Block>
            </Container>
        </>
    )
}
