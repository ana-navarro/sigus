import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FormTitle, InputGroup, FormBody, FormLabel, GenericInput, ButtonGroup, SubmitButton, FormContent, FormButton, GenericInputEdit } from './styled.style';
import { MenuItem, Select } from '@material-ui/core';
import { Number } from './installations/Number';
import Swal from 'sweetalert2';
import api from '../../../services/api';

const monthsOptions = [
    { value: 'Janeiro', label: 'Janeiro', key: 1 },
    { value: 'Fevereiro', label: 'Fevereiro', key: 2 },
    { value: 'Março', label: 'Março', key: 3 },
    { value: 'Abril', label: 'Abril', key: 4 },
    { value: 'Maio', label: 'Maio', key: 5 },
    { value: 'Junho', label: 'Junho', key: 6 },
    { value: 'Julho', label: 'Julho', key: 7 },
    { value: 'Agosto', label: 'Agosto', key: 8 },
    { value: 'Setembro', label: 'Setembro', key: 9 },
    { value: 'Outubro', label: 'Outubro', key: 10 },
    { value: 'Novembro', label: 'Novembro', key: 11 },
    { value: 'Dezembro', label: 'Dezembro', key: 12 },
]

export const EditCredit = () => {
    const [consumed, setConsumed] = useState();
    const [discount, setDiscount] = useState();
    const [distribuition, setDistribuition] = useState();
    const [month, setMonth] = useState();
    const [previousBalance, setPreviousBalance] = useState();
    const [actualBalance, setActualBalance] = useState();
    const [injected, setInjected] = useState();
    const [valueKwh, setValueKwh] = useState();
    const [expirationDate, setExpirationDate] = useState();
    const [usedBalance, setUsedBalance] = useState();
    const [totalInjected, setTotalInjected] = useState();
    const [valueEnergy, setValueEnergy] = useState();
    const [valueDiscount, setValueDiscount] = useState();
    const [valuePayment, setValuePayment] = useState();
    const [idInstallation, setIdInstallation] = useState();
    const [installationNumber, setInstallationNumber] = useState();
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const oldConsumed = useRef();
    const oldDiscount = useRef();
    const oldDistribuition = useRef();
    const oldUsedBalance = useRef();
    const oldPreviousBalance = useRef();
    const oldActualBalance = useRef();
    const oldInjected = useRef();
    const oldValueKwh = useRef();
    const oldTotalInjected = useRef();
    const oldValueEnergy = useRef();
    const oldValueDiscount = useRef();
    const oldValuePayment = useRef();

    useEffect(() => {
        oldConsumed.current = consumed;
    }, [consumed]);

    useEffect(() => {
        oldDiscount.current = discount;
    }, [discount]);

    useEffect(() => {
        oldDistribuition.current = distribuition;
    }, [distribuition]);

    useEffect(() => {
        oldUsedBalance.current = usedBalance
    }, [usedBalance])

    useEffect(() => {
        oldPreviousBalance.current = previousBalance
    }, [previousBalance])

    useEffect(() => {
        oldActualBalance.current = actualBalance
    }, [actualBalance])

    useEffect(() => {
        oldInjected.current = injected
    }, [injected])

    useEffect(() => {
        oldValueKwh.current = valueKwh
    }, [valueKwh])

    useEffect(() => {
        oldTotalInjected.current = totalInjected
    }, [totalInjected])

    useEffect(() => {
        oldValueEnergy.current = valueEnergy
    }, [valueEnergy])

    useEffect(() => {
        oldValueDiscount.current = valueDiscount
    }, [valueDiscount])

    useEffect(() => {
        oldValuePayment.current = valuePayment
    }, [valuePayment])

    const id = useParams();

    const handleOpenModal = () => {
        Swal.fire({
            icon: 'question',
            title: 'Você deseja realmente editar?',
            showDenyButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: 'Não',
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Editado com sucesso!', '', 'success')
                handleSubmit(id);
                navigate('/credit/')
            } else if (result.isDenied) {
                Swal.fire('Não foi salvo às alterações!', '', 'info')
                navigate('/credit/')
            }
        }).catch((error) => console.log(error));
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`/api/credit/${id.idCredit}`);
                setConsumed(res.data.consumed)
                setDiscount(res.data.discount)
                setDistribuition(res.data.distribuition)
                setUsedBalance(res.data.usedBalance)
                setPreviousBalance(res.data.previousBalance)
                setActualBalance(res.data.actualBalance)
                setInjected(res.data.injected)
                setTotalInjected(res.data.totalInjected)
                setValueDiscount(res.data.valueDiscount)
                setValueEnergy(res.data.valueEnergy)
                setValueKwh(res.data.valueKwh)
                setValuePayment(res.data.valuePayment)
                setIdInstallation(res.data.idInstallation)
                setExpirationDate(res.data.expirationDate)
                setMonth(res.data.month)
            } catch (error) {
                console.error(error);
            }
        }
        getData()
    }, []);

    const showModal = () => {
        setShow(true)
    }

    const handleSubmit = async (id) => {
        try {
            const updatedCredit = {
                idInstallation,
                month,
                consumed,
                discount,
                previousBalance,
                actualBalance,
                injected,
                valueKwh,
                expirationDate,
                distribuition,
                usedBalance,
                totalInjected,
                valueEnergy,
                valueDiscount,
                valuePayment
            }
            const res = await api.put(`/api/credit/${id.idCredit}/edit`, updatedCredit);
            toast.dismiss();
            navigate(`/credit/`);
        } catch (error) {
            console.log(error);
            toast.dismiss();
            toast.error("Deu alguma coisa errada!")
        }
    };

    useEffect(() => {
        const getDataInstall = async () => {
            try {
                const res = await api.get(`/api/installations_numbers/${idInstallation}`);
                setInstallationNumber(res.data.numberInstallation);
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getDataInstall();
    }, [idInstallation]);

    return (
        <>
            <ToastContainer />
            {show && handleOpenModal()}
            {!show && (
                <div>
                    <h3 className='text-center p-4'>Editar Crédito:</h3>
                    <FormBody data-testid='credit-edit'>
                        <InputGroup>
                            <FormLabel data-testid='credit-edit-installation' aria-label='Número de Instalação'>Número de Instalação:</FormLabel>
                            <GenericInput
                                variant="filled"
                                aria-label={`${installationNumber}`}
                                labelId="installation"
                                placeholder="installation"
                                onChange={(e) => setIdInstallation(e.target.value)}
                                InputLabelProps={{ shrink: true }}
                                value={installationNumber}
                                fullWidth
                                disabled
                                required />
                            <FormLabel data-testid='credit-edit-month' aria-label='Mês'>Mês:</FormLabel>
                            <Select
                                variant="filled"
                                labelId="month"
                                placeholder="month"
                                aria-label={`${month}`}
                                onChange={(e) => setMonth(e.target.value)}
                                InputLabelProps={{ shrink: true }}
                                value={month}
                                fullWidth
                                required>
                                {monthsOptions.map((month, index) => (
                                    <MenuItem key={index} value={month.value}>{month.label}</MenuItem>
                                ))}
                            </Select>
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                data-testid='credit-edit-consumed'
                                aria-label='Energia Consumida'
                                type="number"
                                placeholder="Energia Consumida"
                                label="Energia Consumida"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setConsumed(e.target.value)}
                                value={consumed}
                                error={consumed === ""}
                                helperText={consumed === "" ? "Energia Consumida não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                data-testid='credit-edit-distribuition'
                                aria-label='Distribuição'
                                type="number"
                                placeholder="Distribuição"
                                label="Distribuição"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setDistribuition(e.target.value)}
                                value={distribuition}
                                error={distribuition === ""}
                                helperText={distribuition === "" ? "Distribuição não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                type="number"
                                data-testid='credit-edit-discount'
                                aria-label='Desconto'
                                placeholder="Desconto"
                                label="Desconto"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setDiscount(e.target.value)}
                                value={discount}
                                error={discount === ""}
                                helperText={discount === "" ? "Desconto não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                type="number"
                                data-testid='credit-edit-previousBalance'
                                aria-label='Balanço Anterior'
                                placeholder="Balanço Anterior"
                                label="Balanço Anterior"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setPreviousBalance(e.target.value)}
                                value={previousBalance}
                                error={previousBalance === ""}
                                helperText={previousBalance === "" ? "Balanço Anterior não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                type="number"
                                data-testid='credit-edit-actualBalance'
                                aria-label='Balanço Atual'
                                placeholder="Balanço Atual"
                                label="Balanço Atual"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setActualBalance(e.target.value)}
                                value={actualBalance}
                                error={actualBalance === ""}
                                helperText={actualBalance === "" ? "Balanço Atual não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                type="number"
                                data-testid='credit-edit-injected'
                                aria-label='Energia Injetada'
                                placeholder="Energia Injetada"
                                label="Energia Injetada"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setInjected(e.target.value)}
                                value={injected}
                                error={injected === ""}
                                helperText={injected === "" ? "Energia Injetada não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                type="number"
                                data-testid='credit-edit-valueKwh'
                                aria-label='Valor KwH'
                                placeholder="Valor KwH"
                                label="Valor KwH"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setValueKwh(e.target.value)}
                                value={valueKwh}
                                error={valueKwh === ""}
                                helperText={valueKwh === "" ? "Valor KwH não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <GenericInput
                                type="date"
                                placeholder="Data de Expiração"
                                label="Data de Expiração"
                                data-testid='credit-edit-expirationDate'
                                aria-label='Data de Expiração'
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setExpirationDate(e.target.value)}
                                value={expirationDate}
                                error={expirationDate === ""}
                                helperText={expirationDate === "" ? "Data de Expiração não pode ser vázio!." : ''}
                                variant="filled"
                                fullWidth
                                required
                            />
                        </InputGroup>
                        <FormButton>
                            <SubmitButton data-testid='credit-edit-btn' aria-label='Editar Crédito' onClick={showModal}>
                                Editar
                            </SubmitButton>
                        </FormButton>
                    </FormBody>

                </div>
            )}
        </>
    )
}
