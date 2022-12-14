import { MenuItem, Select } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../services/api';
import { FormTitle, InputGroup, FormBody, FormLabel, GenericInput, ButtonGroup, SubmitButton } from './styled.style';

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

export const CreditAdd = () => {
    const [consumed, setConsumed] = useState();
    const [discount, setDiscount] = useState();
    const [distribuition, setDistribuition] = useState();
    const [month, setMonth] = useState();
    const [previousBalance, setPreviousBalance] = useState();
    const [actualBalance, setActualBalance] = useState();
    const [injected, setInjected] = useState();
    const [valueKwh, setValueKwh] = useState();
    const [expirationDate, setExpirationDate] = useState();

    const navigate = useNavigate();

    const [idInstallation, setIdInstallation] = useState();
    const [install, setInstall] = useState();

    useEffect(() => {
        const getInstallation = async () => {
            const response = await api.get(`/api/installations_numbers`);
            setInstall(response.data);
        }
        getInstallation()
    }, [install]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newCredit = {
            consumed,
            discount,
            distribuition,
            month,
            idInstallation,
            previousBalance,
            actualBalance,
            injected,
            valueKwh,
            expirationDate,
        }
        try {
            const res = await api.post("/api/credit/add", newCredit);
            toast.dismiss();
            console.log(res.data.msg)
            toast.success(res.data.msg);
            navigate("/credit")
        } catch (error) {
            toast.dismiss();
            toast.error("Deu algum erro!");
            console.log(error)
        }
    }

    return (
        <>
            <ToastContainer />
            <FormBody>
                <FormTitle aria-label='adicionar crédito' data-testid='add-credit'>Adicionar Crédito</FormTitle>
                <InputGroup>
                    <FormLabel aria-label='Número de Instalação'>Número de Instalação:</FormLabel>
                    <Select
                        variant="filled"
                        aria-label='Selecionar Número de Instalação'
                        data-testid='add-credit-number'
                        labelId="installation"
                        placeholder="installation"
                        onChange={(e) => setIdInstallation(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        value={idInstallation}
                        fullWidth
                        required>
                        {install && install.map((installation) => (
                            <MenuItem aria-label={installation.numberInstallation} key={installation._id} value={installation._id}>{installation.numberInstallation}</MenuItem>
                        ))}
                    </Select>
                    <FormLabel aria-label='Mês'>Mês:</FormLabel>
                    <Select
                        variant="filled"
                        labelId="month"
                        aria-label='Selecionar Mês'
                        data-testid='add-credit-month'
                        placeholder="month"
                        onChange={(e) => setMonth(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        value={month}
                        fullWidth
                        required>
                        {monthsOptions.map((month, index) => (
                            <MenuItem key={index} value={month.value} aria-label={month.label} >{month.label}</MenuItem>
                        ))}
                    </Select>
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="number"
                        placeholder="Energia Consumida"
                        aria-label='Energia Consumida'
                        data-testid='add-credit-consumed'
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
                        type="number"
                        placeholder="Distribuição"
                        label="Distribuição"
                        aria-label='Distribuição'
                        data-testid='add-credit-distribuition'
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
                        placeholder="Desconto"
                        label="Desconto"
                        aria-label='Desconto'
                        data-testid='add-credit-discount'
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
                        placeholder="Balanço Anterior"
                        label="Balanço Anterior"
                        aria-label='Balanço Anterior'
                        data-testid='add-credit-previousBalance'
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
                        placeholder="Balanço Atual"
                        label="Balanço Atual"
                        aria-label='Balanço Atual'
                        data-testid='add-credit-actualBalance'
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
                        placeholder="Energia Injetada"
                        label="Energia Injetada"
                        aria-label='Energia Injetada'
                        data-testid='add-credit-injected'
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
                        placeholder="Valor KwH"
                        label="Valor KwH"
                        aria-label='Valor KwH'
                        data-testid='add-credit-valueKwh'
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
                        aria-label='Data de Expiração'
                        data-testid='add-credit-expirationDate'
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

                <ButtonGroup>
                    <SubmitButton onClick={handleSubmit}
                        aria-label='Adicionar Crédito'
                        data-testid='add-credit-btn'
                        disabled={!idInstallation || !month || !consumed || !distribuition || !discount || !previousBalance || !actualBalance || !injected || !valueKwh || !expirationDate}>
                        Enviar
                    </SubmitButton>
                </ButtonGroup>
            </FormBody>
        </>
    )
}
