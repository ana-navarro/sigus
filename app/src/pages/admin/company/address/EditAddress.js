import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import api from '../../../../services/api';
import { FormLabel, BlockInput, CityInput, CountryInput, FormBody, FormContent, FormTitle, InputGroup, MoreInfoInput, NumberInput, PostalCodeInput, StateInput, StreetInput, AddressButtonGroup, SubmitButton } from './styled.style';

export const EditAddress = () => {
    const id = useParams();
    const navigate = useNavigate();
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [moreInfo, setMoreInfo] = useState('');
    const [block, setBlock] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const streetRef = useRef()
    const numberRef = useRef()
    const moreInfoRef = useRef()
    const blockRef = useRef()
    const stateRef = useRef()
    const cityRef = useRef()
    const countryRef = useRef()
    const postalCodeRef = useRef()

    useEffect(() => {
        const getAddress = async () => {
            try {
                const res = await api.get(`/api/company/${id.idAddress}/address/info`);
                setStreet(res.data.street);
                setNumber(res.data.number);
                setMoreInfo(res.data.moreInfo);
                setBlock(res.data.block);
                setState(res.data.state);
                setCity(res.data.city);
                setCountry(res.data.country);
                setPostalCode(res.data.postalCode);
            } catch (error) {
                console.error(error);
            }
        }
        getAddress();
    }, [])

    const handleOpenModal = () => {
        Swal.fire({
            icon: 'question',
            title: 'Você deseja realmente editar?',
            showDenyButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim',
            denyButtonText: 'Não',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Editado com sucesso!', '', 'success')
                handleSubmitEdit(id);
            } else if (result.isDenied) {
                Swal.fire('Não foi salvo às alterações!', '', 'info')
            }
        }).catch((error) => console.log(error));
    };

    const handleSubmitEdit = async (id) => {
        const newAddress = { street, block, postalCode, number, state, city, country, moreInfo };
        try {
            console.log(newAddress)
            const res = await api.put(`/api/company/${id.idAddress}/address/edit`, newAddress);
            toast.dismiss();
            toast.success(res.data.msg);
            navigate(`/company/`)
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

    useEffect(() => {
        streetRef.current.value = street;
    }, [street]);

    useEffect(() => {
        numberRef.current.value = number;
    }, [number]);

    useEffect(() => {
        blockRef.current.value = block;
    }, [block]);

    useEffect(() => {
        cityRef.current.value = city;
    }, [city]);

    useEffect(() => {
        stateRef.current.value = state;
    }, [state]);

    useEffect(() => {
        countryRef.current.value = country;
    }, [country]);

    useEffect(() => {
        postalCodeRef.current.value = postalCode;
    }, [postalCode]);

    useEffect(() => {
        moreInfoRef.current.value = moreInfo;
    }, [moreInfo]);

    return (
        <>
            <ToastContainer />
            <FormBody data-testid="edit-address-form">
                <FormTitle aria-label='Editar Endereço'>Editar Endereço</FormTitle>
                <FormContent>
                    <FormLabel aria-label='CEP'>CEP:</FormLabel>
                    <PostalCodeInput {...register("postalCode")} type="number" placeholder="CEP" onChange={(e) => setPostalCode(e.target.value)} onBlur={buscarCep} required ref={postalCodeRef} />
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
                            InputLabelProps={{ shrink: true }}
                            label='Rua'
                            aria-label='Rua da Empresa'
                            type="text"
                            placeholder="Rua"
                            onChange={handleStreetChange}
                            error={street === ""}
                            helperText={street === "" ? "Rua não pode ser vázia!." : ''}
                            inputRef={streetRef}
                            required />
                        <NumberInput
                            {...register("number")}
                            label='Número'
                            aria-label='Número da Empresa'
                            InputLabelProps={{ shrink: true }}
                            type="text"
                            placeholder="Número"
                            onChange={handleNumberChange}
                            error={number === ""}
                            helperText={number === "" ? "Número não pode ser vázio!." : ''}
                            inputRef={numberRef}
                            required />
                    </InputGroup>

                    <FormContent>
                        <BlockInput
                            {...register("block")}
                            label='Bairro'
                            aria-label='Bairro da Empresa'
                            InputLabelProps={{ shrink: true }}
                            type="text"
                            onChange={handleblockChange}
                            error={block === ""}
                            helperText={block === "" ? "Bairro não pode ser vázio!." : ''}
                            inputRef={blockRef}
                            required />
                    </FormContent>

                    <FormContent>
                        <MoreInfoInput
                            {...register("moreInfo")}
                            label='Complemento'
                            aria-label='Complemento da Empresa'
                            InputLabelProps={{ shrink: true }}
                            type="text"
                            placeholder="Complemento"
                            inputRef={moreInfoRef}
                            onChange={(e) => setMoreInfo(e.target.value)} />
                    </FormContent>

                    <FormContent>
                        <CityInput {
                            ...register("city")}
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            label='Cidade'
                            aria-label='Cidade da Empresa'
                            placeholder="Cidade"
                            onChange={handlecityChange}
                            error={city === ""}
                            inputRef={cityRef}
                            helperText={city === "" ? "Cidade não pode ser vázia!." : ''}
                            required />
                        <StateInput
                            {...register("state")}
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            label='UF'
                            aria-label='Estado (UF) da Empresa'
                            placeholder="Estado"
                            onChange={handlestateChange}
                            error={state === ""}
                            inputRef={stateRef}
                            helperText={state === "" ? "Estado não pode ser vázio!." : ''}
                            required />
                        <CountryInput
                            {...register("country")}
                            type="text"
                            label='País'
                            InputLabelProps={{ shrink: true }}
                            placeholder="País"
                            aria-label='País da Empresa'
                            inputRef={countryRef}
                            onChange={handlecountryChange}
                            error={country === ""}
                            helperText={country === "" ? "País não pode ser vázio!." : ''}
                            required />
                    </FormContent>
                </Box>
                <AddressButtonGroup>
                    <SubmitButton aria-label='Editar Empresa' data-testid="edit-address-btn" onClick={handleSubmit(handleOpenModal)} disabled={!street || !number || !block || !city || !state || !country || !postalCode}>Adicionar</SubmitButton>
                </AddressButtonGroup>
            </FormBody>
        </>
    )
}
