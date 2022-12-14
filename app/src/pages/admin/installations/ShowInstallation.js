import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { DeleteButton, EditButton, ShowInfo, ShowName, ShowTitle, UnstyledLinks } from './styled.style';
import api from '../../../services/api';

export const ShowInstallation = () => {
    const [installation, setInstallation] = useState([]);
    const [company, setCompany] = useState();
    const [companyName, setCompanyName] = useState();

    const id = useParams();
    const getCompanyName = async (id) => {
        try {
            const res = await api.get(`/api/company/${id}`)
            setCompanyName(res.data.company.name)
            setCompany(id)
        } catch (error) {
            console.error(error);
        }
    }

    const getData = async () => {
        try {
            const res = await api.get(`/api/installations_numbers/${id.idInstallation}`);
            setInstallation(res.data);
            getCompanyName(res.data.idCompany)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);


    return (
        <>
            <ToastContainer />
            <ShowTitle>
                <ShowName data-testid="show-installation" aria-label={`Número de Instalação ${installation.numberInstallation}`}>Número de Instalação: {installation.numberInstallation}</ShowName>
                <EditButton data-testid="show-installation-edit-btn" aria-label="Editar número de instalação">
                    <UnstyledLinks to={`/installations/${installation._id}/edit`}>Editar</UnstyledLinks>
                </EditButton>
                <DeleteButton data-testid="show-installation-delete-btn" aria-label="Deletar número de instalação">
                    <UnstyledLinks to={`/installations/${installation._id}/delete`}>Excluir</UnstyledLinks>
                </DeleteButton>
            </ShowTitle>
            <ShowInfo data-testid="show-installation-company" aria-label={`Empresa ${companyName}`}>
                <p>Empresa: <Link to={`/company/${company}`}>{companyName}</Link> </p>
            </ShowInfo>
        </>
    )
}
