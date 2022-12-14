import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { FormBody } from '../company/styled.style';

import { FormButton, FormContent, FormLabel, GenericInput, InputGroup, SubmitButton } from './styled.style';
import api from '../../../services/api';

export const EditClient = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState();
    const [show, setShow] = useState(false);

    const [idCompany, setIdCompany] = useState();

    const id = useParams();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const cpfRef = useRef();
    const emailRef = useRef();

    const navigate = useNavigate();

    const handleChangeCompany = (selectedOption) => {
        setIdCompany(selectedOption.target.value);
    };

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
                navigate('/clients/')
            } else if (result.isDenied) {
                Swal.fire('Não foi salvo às alterações!', '', 'info')
                navigate('/clients/')
            }
        }).catch((error) => console.log(error));
    };

    const showModal = () => {
        setShow(true)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(
                    `/api/client/${id.idClient}`,
                );
                setIdCompany(res.data.idCompany);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setCpf(res.data.cpf);
                setEmail(res.data.email);
            } catch (error) {
                console.error(error);
            }
        }
        getData()
    }, []);

    useEffect(() => {
        firstNameRef.current = firstName;
    }, [firstName]);

    useEffect(() => {
        lastNameRef.current = lastNameRef;
    }, [lastName]);

    useEffect(() => {
        cpfRef.current = cpf;
    }, [cpf]);

    useEffect(() => {
        emailRef.current = email
    }, [email])

    async function handleSubmit(id) {
        try {
            const userObj = {
                firstName,
                lastName,
                idCompany
            };
            const res = await api.put(
                `/api/client/${id.idClient}/edit`,
                userObj,
            );
            toast.dismiss();
            toast.success(res.data.msg);
            navigate(`/clients`);
        } catch (error) {
            console.error(error);
            toast.error("Deu algum erro!")
        }
    }

    return (
        <>
            <ToastContainer />
            {show && handleOpenModal()}
            {!show && (
                <div>
                    <h3 className='text-center p-4'>Editar Cliente: {firstName}</h3>
                    <FormBody>
                        <FormContent>
                            <GenericInput
                                label="Primeiro nome"
                                variant="filled"
                                value={firstName}
                                InputLabelProps={{ shrink: true }}
                                placeholder="Primeiro Nome"
                                inputRef={firstNameRef}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </FormContent>

                        <FormContent>
                            <GenericInput
                                label="Ultimo nome"
                                variant="filled"
                                value={lastName}
                                InputLabelProps={{ shrink: true }}
                                placeholder="Ultimo Nome"
                                inputRef={lastNameRef}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </FormContent>

                        <FormContent>
                            <GenericInput
                                label="CPF"
                                disabled
                                variant="filled"
                                value={cpf}
                                InputLabelProps={{ shrink: true }}
                                placeholder="CPF"
                                inputRef={cpfRef}
                                onChange={(e) => {
                                    setCpf(e.target.value);
                                }}
                            />
                        </FormContent>

                        <FormContent>
                            <GenericInput
                                label="Email"
                                disabled
                                variant="filled"
                                value={email}
                                InputLabelProps={{ shrink: true }}
                                placeholder="email"
                                inputRef={emailRef}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </FormContent>

                        <FormButton>
                            <SubmitButton onClick={showModal}>
                                Enviar
                            </SubmitButton>
                        </FormButton>
                    </FormBody>
                </div>
            )}
        </>
    )
}
