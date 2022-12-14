import React, { useEffect, useState } from 'react'
import { ButtonGroup, FormBody, FormContent, FormLabel, FormTitle, GenericInput, InputGroup, SubmitButton } from './styled.style';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { MenuItem, Select } from '@material-ui/core';
import api from '../../../services/api';

export const AddInstallation = () => {
    const [idCompany, setIdCompany] = useState();
    const [companies, setCompanies] = useState([]);

    const [numberInstallation, setNumberInstallation] = useState();

    const navigate = useNavigate();

    const handleChangeCompany = (e) => {
        setIdCompany(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newInstall = {
            idCompany, numberInstallation
        }
        console.log(newInstall)
        try {
            const response = await api.post("/api/installations_numbers/add", newInstall);
            toast.dismiss();
            navigate('/installations')
            toast.success(response.data.msg);
        } catch (error) {
            toast.error("Deu algum erro!");
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchTechnical = async () => {
            const res = await api.get('/api/company');
            setCompanies(res.data);
        };
        fetchTechnical();
    }, []);

    return (
        <>
            <ToastContainer />
            <FormBody data-testid="add-installation-form">
                <FormTitle>Adicionar Número de Instalação:</FormTitle>
                <InputGroup>
                    <GenericInput
                        type="number"
                        aria-label='Adicionar Número de Instalação'
                        data-testid="add-installation-number"
                        placeholder="Número de Instalação"
                        label="Número de Instalação"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setNumberInstallation(e.target.value)}
                        value={numberInstallation}
                        error={numberInstallation === ""}
                        helperText={numberInstallation === "" ? "Número de Instalação não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <FormLabel>Empresa</FormLabel>
                    <Select
                        variant="filled"
                        labelId="Empresa"
                        aria-label='Adicionar Empresa'
                        data-testid="add-installation-company"
                        placeholder="Empresa"
                        onChange={handleChangeCompany}
                        InputLabelProps={{ shrink: true }}
                        value={idCompany}
                        defaultValue=""
                        fullWidth
                        required
                    >
                        {companies && companies.map(({ _id, name }) => (
                            <MenuItem aria-label={`${name}`} key={_id} value={_id}>{name}</MenuItem>
                        ))}
                    </Select>
                </InputGroup>

                <ButtonGroup>
                    <SubmitButton data-testid="add-installation-submit-btn" aria-label='Adicionar Botão' onClick={handleSubmit} disabled={!numberInstallation || !idCompany}>Enviar</SubmitButton>
                </ButtonGroup>
            </FormBody>
        </>
    )
}
