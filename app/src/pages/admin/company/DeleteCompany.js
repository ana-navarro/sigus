import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import api from '../../../services/api';

export const DeleteCompany = () => {
    const id = useParams();
    const navigate = useNavigate();

    Swal.fire({
        title: 'Você deseja realmente excluir?',
        showDenyButton: true,
        icon: 'question',
        confirmButtonText: 'Sim',
        denyButtonText: 'Não',
        allowOutsideClick: false,
        allowEscapeKey: false,
    })
        .then((result) => {
            if (result.isConfirmed) {
                excludeUser(id.idDelete);
                console.log(id.idDelete)
                Swal.fire('Excluído!', '', 'success');
                navigate(`/company/`);
            } else if (result.isDenied) {
                navigate(`/company/`);
            }
        })
        .catch((error) => console.log(error));

    async function excludeUser(id) {
        try {
            const res = await api.delete(
                `/api/company/${id}/delete`,
            );
        } catch (error) {
            console.log(error);
        }
    }
    return;
}
