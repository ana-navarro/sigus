import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyAddButton, CompanyButtonGroup, CompanyDeleteButton, CompanyEditButton, CompanyLinks, CompanyName, CompanyShowInfo, CompanyShowTitle } from './styled.style';
import { ShowAddress } from './address/ShowAddress';
import { ToastContainer } from 'react-toastify';
import api from '../../../services/api';

export const ShowCompany = () => {
    const [company, setCompany] = useState([]);

    const [address, setAddress] = useState({});
    const [showAddress, setShowAddress] = useState(false);

    const id = useParams();

    sessionStorage.setItem('CompanyId', id.idCompany);

    const getData = async () => {
        try {
            const res = await api.get(`/api/company/${id.idCompany}`);
            setCompany(res.data.company);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getData()
    }, []);

    const getAddress = async () => {
        try {
            const res = await api.get(`/api/company/${id.idCompany}/address`);
            if (res.data.length !== 0) {
                setShowAddress(true);
                setAddress(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAddress();
    }, [])

    return (
        <>
            <ToastContainer />
            <CompanyShowTitle data-testid='company-title'>
                <CompanyName aria-label={company.name} data-testid='show-company-name'>{company.name}</CompanyName>
                <CompanyEditButton><CompanyLinks data-testid='show-company-edit-btn' to={`/company/${company._id}/edit`} aria-label="Botão de Editar Empresa">Editar</CompanyLinks></CompanyEditButton>
                <CompanyDeleteButton><CompanyLinks data-testid='show-company-delete-btn' to={`/company/${company._id}/delete`} aria-label="Botão de Excluir Empresa">Excluir</CompanyLinks></CompanyDeleteButton>
            </CompanyShowTitle>
            <CompanyShowInfo data-testid='company-info'>
                <p aria-label={company.email} data-testid='show-company-email'>
                    Email: {company.email}
                </p>
                <p aria-label={company.phone} data-testid='show-company-phone'>
                    Telefone: {company.phone}
                </p>
                <p aria-label={company.cnpj} data-testid='show-company-cnpj'>
                    CNPJ: {company.cnpj}
                </p>

            </CompanyShowInfo>
            {!showAddress && (
                <CompanyButtonGroup>
                    <CompanyAddButton data-testid='show-company-add-address-btn' aria-label="Adicionar Endereço"><CompanyLinks to={`address/add`}>Adicionar Endereço</CompanyLinks></CompanyAddButton>
                </CompanyButtonGroup>
            )}
            {showAddress && (
                <ShowAddress data-testid='show-company-address' aria-label="Endereço da empresa" />
            )}
        </>
    )
}