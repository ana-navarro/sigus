import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { CnpjInput, EmailInput, FormContent, FormLabel, FormTitle, InputGroup, NameInput, FormBody, PhoneStyledInput, SubmitButton, FormButton } from './styled.style';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import InputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';
import api from '../../../services/api';

export const EditCompany = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const cnpjRef = useRef();

    const id = useParams();

    useEffect(() => {
        const getCompany = async () => {
            try {
                const res = await api.get(`/api/company/${id.idCompany}`)
                setName(res.data.company.name);
                setPhone(res.data.company.phone);
                setCnpj(res.data.company.cnpj);
            } catch (error) {
                console.log(error)
            }
        }
        getCompany();
    }, [])


    useEffect(() => {
        nameRef.current = name;
    }, [name]);

    useEffect(() => {
        phoneRef.current = phone;
    }, [phone]);

    useEffect(() => {
        cnpjRef.current = cnpj;
    }, [cnpj]);

    useEffect(() => {
        emailRef.current = email;
    }, [email]);

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
                navigate('/company/')
            } else if (result.isDenied) {
                Swal.fire('Não foi salvo às alterações!', '', 'info')
                navigate('/company/')
            }
        }).catch((error) => console.log(error));
    };

    const showModal = () => {
        setShow(true)
    }

    const handleSubmit = async (id) => {
        try {
            const company = {
                name, cnpj, phone
            }
            const res = await api.put(`/api/company/${id.idCompany}/edit`, company);
            toast.dismiss();
            toast.success(res.data.msg);
            navigate(`/company`);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <ToastContainer />
            {show && handleOpenModal()}
            {!show && (
                <div data-testid="edit-company-action">
                    <h3 className='text-center p-4' aria-label={`Editar a Empresa ${name}`}>Editar Empresa: {name}</h3>
                    <FormBody>
                        <FormContent>
                            <NameInput
                                label="Nome"
                                data-testid="edit-company-name"
                                type="text"
                                aria-label={`Editar Nome Atual ${name}`}
                                placeholder="Nome da Empresa"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setName(e.target.value)}
                                inputRef={nameRef}
                                variant="filled"
                                value={name} />
                        </FormContent>
                        <FormContent>
                            <EmailInput
                                type="text"
                                label="Email"
                                data-testid="edit-company-email"
                                aria-label={`Editar Email Atual ${email}`}
                                inputRef={emailRef}
                                InputLabelProps={{ shrink: true }}
                                placeholder="Não é possível alterar o Email"
                                value={email}
                                variant="filled"
                                disabled />
                        </FormContent>
                        <FormContent>
                            <CnpjInput
                                type="text"
                                label="CNPJ"
                                data-testid="edit-company-cnpj"
                                aria-label={`Editar CNPJ Atual ${cnpj}`}
                                InputLabelProps={{ shrink: true }}
                                inputRef={cnpjRef}
                                value={cnpj}
                                variant="filled"
                                disabled />
                        </FormContent>
                        <FormContent>
                            <InputMask mask='(99) 9999-9999' value={phone} onChange={(e) => setPhone(e.target.value)}>
                                <TextField
                                    aria-label={`Editar Telefone Atual ${phone}`}
                                    label="Telefone"
                                    type="text"
                                    data-testid="edit-company-phone"
                                    placeholder="Telefone"
                                    fullWidth
                                    variant="filled"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                />
                            </InputMask>
                        </FormContent>

                        <FormButton>
                            <SubmitButton onClick={showModal} data-testid="edit-company-modal">
                                Enviar
                            </SubmitButton>
                        </FormButton>
                    </FormBody>
                </div>
            )}
        </>
    )
}
