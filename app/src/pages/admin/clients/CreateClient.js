import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonGroup, FormBody, FormContent, FormLabel, FormTitle, GenericInput, InputGroup, SubmitButton } from './styled.style';
import InputMask from "react-input-mask";
import { MenuItem, Select } from '@material-ui/core';
import { CompanyContext } from '../../../context/Company'
import api from '../../../services/api';

export const CreateClient = () => {
    const [idCompany, setIdCompany] = useState(null);
    const { companiesMap } = useContext(CompanyContext)

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    const handleChangeCompany = (selectedOption) => {
        setIdCompany(selectedOption.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newClient = {
            firstName, lastName, cpf, email, idCompany
        }
        console.log(newClient)
        try {
            const response = await api.post("/api/client/add", newClient);
            toast.dismiss();
            navigate('/clients')
            toast.success(response.data.msg);
        } catch (error) {
            toast.error("Deu algum erro!");
            console.log(error)
        }
    }

    return (
        <>
            <ToastContainer />
            <FormBody>
                <FormTitle>Adicionar Cliente: </FormTitle>

                <InputGroup>
                    <InputMask mask="999.999.999-99" value={cpf} onChange={(e) => setCpf(e.target.value)}>
                        <GenericInput
                            type="text"
                            placeholder="CPF"
                            label="CPF"
                            InputLabelProps={{ shrink: true }}
                            error={cpf === ""}
                            helperText={cpf === "" ? "Primeiro Nome não pode ser vázia!." : ''}
                            variant="filled"
                            required
                        />
                    </InputMask>
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="text"
                        placeholder="Primeiro Nome"
                        label="Primeiro Nome"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        error={firstName === ""}
                        helperText={firstName === "" ? "Primeiro Nome não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="text"
                        placeholder="Último Nome"
                        label="Último Nome"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        error={lastName === ""}
                        helperText={lastName === "" ? "Último Nome não pode ser vázio!." : ''}
                        variant="filled"
                        fullWidth
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <GenericInput
                        type="email"
                        placeholder="Email"
                        label="Email"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        error={email === ""}
                        helperText={email === "" ? "Email não pode ser vázia!." : ''}
                        variant="filled"
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <FormLabel id="label">Empresa</FormLabel>
                    <Select
                        variant="filled"
                        labelId="Empresa"
                        placeholder="Empresa"
                        onChange={handleChangeCompany}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                    >
                        {companiesMap.map((c) => (
                            <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
                        ))}
                    </Select>
                </InputGroup>

                <ButtonGroup>
                    <SubmitButton onClick={handleSubmit} disabled={!firstName || !lastName || !cpf || !email || !idCompany}>Criar Cliente</SubmitButton>
                </ButtonGroup>
            </FormBody>
        </>
    )
}
