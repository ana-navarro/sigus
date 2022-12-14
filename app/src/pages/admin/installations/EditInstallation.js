import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { FormBody, FormButton, FormContent, GenericInput, SubmitButton } from './styled.style';
import api from '../../../services/api';

export const EditInstallation = () => {
    const [numberInstallation, setNumberInstallation] = useState();
    const numberInstallationRef = useRef();
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

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
            } else if (result.isDenied) {
                Swal.fire('Não foi salvo às alterações!', '', 'info')
                navigate('/installations/')
            }
        }).catch((error) => console.log(error));
    };

    const showModal = () => {
        setShow(true)
    }

    const getData = async () => {
        try {
            const res = await api.get(`/api/installations_numbers/${id.idInstallation}`);
            setNumberInstallation(res.data.numberInstallation);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        numberInstallationRef.current = numberInstallation;
    }, []);

    async function handleSubmit(id) {
        try {
            const installation = {
                numberInstallation
            };
            const res = await api.put(
                `/api/installations_numbers/${id.idInstallation}/edit`,
                installation,
            );
            toast.dismiss();
            toast.success(res.data.msg);
            navigate(`/installations`);
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
                <div data-testid="installation-edit-form">
                    <h3 aria-label={`Editar Instalação ${numberInstallation}`} className='text-center p-4'>Editar Instalação: {numberInstallation} </h3>
                    <FormBody>
                        <FormContent>
                            <GenericInput
                                label="Número de Instalação"
                                variant="filled"
                                data-testid="installation-edit-number"
                                aria-label='Editar número de instalação'
                                value={numberInstallation}
                                InputLabelProps={{ shrink: true }}
                                placeholder="Número de Instalação"
                                inputRef={numberInstallationRef}
                                onChange={(e) => {
                                    setNumberInstallation(e.target.value);
                                }}
                            />
                        </FormContent>

                        <FormButton>
                            <SubmitButton onClick={showModal} data-testid="installation-edit-form-btn" aria-label='Editar'>
                                Enviar
                            </SubmitButton>
                        </FormButton>
                    </FormBody>
                </div>
            )}
        </>
    )
}
