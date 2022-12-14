import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import api from '../../../../services/api';
import { AddressDeleteButton, AddressEditButton, AddressLinks, AddressName, AddressShowInfo, AddressTitleGroup } from './styled.style'

export const ShowAddress = () => {
    const [address, setAddress] = useState({});

    const id = useParams();

    const getAddress = async () => {
        try {
            const res = await api.get(`/api/company/${id.idCompany}/address`);
            setAddress(res.data[0]);
            console.log(res.data);
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
            <AddressTitleGroup>
                <AddressName
                    aria-label='Endereço da Empresa'
                    data-testid="show-address-header"
                >
                    Endereço
                </AddressName>
                <AddressEditButton><AddressLinks
                    aria-label='Editar Endereço'
                    data-testid="show-address-edit-btn"
                    to={`/company/${address._id}/address/edit`}>Editar</AddressLinks></AddressEditButton>
                <AddressDeleteButton><AddressLinks
                    aria-label='Deletar Endereço'
                    data-testid="show-address-delete-btn"
                    to={`/company/${address._id}/address/delete`}>Excluir</AddressLinks></AddressDeleteButton>
            </AddressTitleGroup>
            <AddressShowInfo>
                <p
                    aria-label={`Rua da Empresa ${address.street}, número ${address.number}`}
                    data-testid="show-address-street-number"
                >Rua: {address.street}, {address.number}</p>
                <p
                    aria-label={`Bairro da Empresa ${address.block}`}
                    data-testid="show-address-block"
                >Bairro: {address.block}</p>
                <p
                    aria-label={`Complemento da Empresa ${address.moreInfo}`}
                    data-testid="show-address-moreInfo"
                >Complemento: {address.moreInfo}</p>
                <p
                    aria-label={`CEP da Empresa ${address.postalCode}`}
                    data-testid="show-address-postalCode"
                >CEP: {address.postalCode}</p>
                <p
                    aria-label={`Cidade da Empresa ${address.city}`}
                    data-testid="show-address-city"
                >Cidade: {address.city}</p>
                <p
                    aria-label={`Estado da Empresa ${address.state}`}
                    data-testid="show-address-state"
                >Estado: {address.state}</p>
                <p
                    aria-label={`País da Empresa ${address.country}`}
                    data-testid="show-address-country"
                >País: {address.country}</p>
            </AddressShowInfo>
        </>
    )
}
