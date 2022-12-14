import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { SubmitButton } from '../styled.style';
import { FormLabel, BlockInput, CityInput, CountryInput, FormBody, FormContent, FormTitle, InputGroup, MoreInfoInput, NumberInput, PostalCodeInput, StateInput, StreetInput, AddressButtonGroup } from './styled.style';
import InputMask from "react-input-mask";
import api from '../../../../services/api';

export const AddAddress = () => {
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [moreInfo, setMoreInfo] = useState('');
    const [block, setBlock] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const navigate = useNavigate();
    const id = useParams()
    const idCompany = id.idCompany;

    const onSubmit = async (data) => {
        setBlock(data.block);
        setStreet(data.street);
        setState(data.state);
        setCity(data.city);
        setCountry(data.country);
        setPostalCode(postalCode);
        const newAddress = { street, block, idCompany, postalCode, number, state, city, country, moreInfo };
        try {
            console.log(newAddress)
            const res = await api.post(`/api/company/${idCompany}/address/add`, newAddress);
            toast.dismiss();
            toast.success(res.data.msg);
            navigate(`/company/${idCompany}`)
        } catch (error) {
            toast.dismiss();
            toast.error("Deu algum erro!");
            console.log(error)
        }
    }

    const { register, handleSubmit, setValue, setFocus } = useForm();

    const buscarCep = (e) => {
        fetch(`https://viacep.com.br/ws/${postalCode}/json/`).then(res => res.json()).then(data => {
            //console.log(data);
            // register({ name: 'address', value: data.logradouro });
            setValue('street', data.logradouro);
            setStreet(data.logradouro);
            setValue('block', data.bairro);
            setBlock(data.bairro);
            setValue('city', data.localidade);
            setCity(data.localidade);
            setValue('state', data.uf);
            setState(data.uf);
            setValue('country', 'Brasil')
            setCountry('Brasil')
            setFocus('number');
        });
    }

    const handleStreetChange = (e) => {
        setStreet(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const handleblockChange = (e) => {
        setBlock(e.target.value);
    }

    const handlecityChange = (e) => {
        setCity(e.target.value);
    }

    const handlestateChange = (e) => {
        setState(e.target.value);
    }

    const handlecountryChange = (e) => {
        setCountry(e.target.value);
    }

    return (
        <>
            <ToastContainer />
            <FormBody>
                <FormTitle
                    aria-label='Adicionar Endereço à uma Empresa'
                    data-testid="add-address-header">
                    Adicionar Endereço</FormTitle>
                <FormContent>
                    <FormLabel>CEP:</FormLabel>
                    <PostalCodeInput
                        {...register("postalCode")}
                        type="number"
                        placeholder="CEP"
                        aria-label='CEP da Empresa'
                        data-testid="add-address-cep"
                        onChange={(e) => setPostalCode(e.target.value)}
                        onBlur={buscarCep}
                        required />
                </FormContent>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <InputGroup>
                        <StreetInput
                            {...register("street")}
                            label='Rua'
                            type="text"
                            aria-label='Rua da Empresa'
                            data-testid="add-address-street"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Rua"
                            onChange={handleStreetChange}
                            error={street === ""}
                            helperText={street === "" ? "Rua não pode ser vázia!." : ''}
                            variant="filled"
                            required />
                        <NumberInput
                            {...register("number")}
                            label='Número'
                            aria-label='Número da Casa da Empresa'
                            data-testid="add-address-number"
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Número"
                            onChange={handleNumberChange}
                            error={number === ""}
                            helperText={number === "" ? "Número não pode ser vázio!." : ''}
                            variant="filled"
                            required />
                    </InputGroup>

                    <FormContent>
                        <BlockInput
                            {...register("block")}
                            label='Bairro'
                            InputLabelProps={{ shrink: true }}
                            aria-label='Bairro da Empresa'
                            data-testid="add-address-block"
                            type="text"
                            onChange={handleblockChange}
                            error={block === ""}
                            helperText={block === "" ? "Bairro não pode ser vázio!." : ''}
                            variant="filled"
                            required />
                    </FormContent>

                    <FormContent>
                        <MoreInfoInput
                            {...register("moreInfo")}
                            label='Complemento'
                            aria-label='Complemento da Empresa'
                            data-testid="add-address-moreInfo"
                            InputLabelProps={{ shrink: true }}
                            type="text"
                            placeholder="Complemento"
                            variant="filled"
                            onChange={(e) => setMoreInfo(e.target.value)} />
                    </FormContent>

                    <FormContent>
                        <CityInput {
                            ...register("city")}
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            label='Cidade'
                            placeholder="Cidade"
                            aria-label='Cidade da Empresa'
                            data-testid="add-address-city"
                            onChange={handlecityChange}
                            variant="filled"
                            error={city === ""}
                            helperText={city === "" ? "Cidade não pode ser vázia!." : ''}
                            required />
                        <StateInput
                            {...register("state")}
                            type="text"
                            label='UF'
                            InputLabelProps={{ shrink: true }}
                            placeholder="Estado"
                            variant="filled"
                            aria-label='Estado da Empresa'
                            data-testid="add-address-state"
                            onChange={handlestateChange}
                            error={state === ""}
                            helperText={state === "" ? "Estado não pode ser vázio!." : ''}
                            required />
                        <CountryInput
                            {...register("country")}
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            label='País'
                            placeholder="País"
                            aria-label='País da Empresa'
                            data-testid="add-address-country"
                            variant="filled"
                            onChange={handlecountryChange}
                            error={country === ""}
                            helperText={country === "" ? "País não pode ser vázio!." : ''}
                            required />
                    </FormContent>
                </Box>
                <AddressButtonGroup>
                    <SubmitButton data-testid="add-address-btn" onClick={handleSubmit(onSubmit)} disabled={!street || !number || !block || !city || !state || !country || !postalCode}>Adicionar</SubmitButton>
                </AddressButtonGroup>
            </FormBody>
        </>
    )
}
