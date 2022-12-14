import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { DeleteButton, EditButton, ShowInfo, ShowName, ShowTitle, UnstyledLinks } from './styled.style';
import api from '../../../services/api';

export const ShowClient = () => {
    const [client, setClient] = useState([]);
    const [company, setCompany] = useState();
    const [companyName, setCompanyName] = useState();

    const id = useParams();

    const getData = async () => {
        try {
            const res = await api.get(`/api/client/${id.idClient}`);
            setClient(res.data);
            setCompany(res.data.idCompany);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData()
    }, []);


    useEffect(() => {
        const getCompanyName = async () => {
            try {
                const res = await api.get(`/api/company/${company}`)
                setCompanyName(res.data.company.name)
            } catch (error) {
                console.error(error);
            }
        }

        getCompanyName();
    }, [company]);

    return (
        <>
            <ToastContainer />
            <ShowTitle>
                <ShowName>{client.firstName} {client.lastName}</ShowName>
                <EditButton>
                    <UnstyledLinks to={`/clients/${client._id}/edit`}>Editar</UnstyledLinks>
                </EditButton>
                <DeleteButton>
                    <UnstyledLinks to={`/clients/${client._id}/delete`}>Excluir</UnstyledLinks>
                </DeleteButton>
            </ShowTitle>

            <ShowInfo>
                <p>Email: {client.email}</p>
                <p>CPF: {client.cpf}</p>
                <p>Empresa: <Link to={`/company/${company}`}>{companyName}</Link> </p>
            </ShowInfo>
        </>
    )
}
