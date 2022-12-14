import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import api from '../../../services/api';

export const DeleteClient = () => {
    const idClient = useParams();
    const navigate = useNavigate();

    Swal.fire({
        title: 'Você deseja realmente excluir?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'Excluir',
        denyButtonText: 'Não',
        allowOutsideClick: false,
        allowEscapeKey: false,
    })
        .then((result) => {
            if (result.isConfirmed) {
                excludeUser(idClient.idClient);
                Swal.fire('Excluído!', '', 'success');
                navigate(`/clients/`);
            } else if (result.isDenied) {
                navigate(`/clients/`);
            }
        })
        .catch((error) => console.log(error));

    async function excludeUser(id) {
        try {
            const res = await api.delete(
                `/api/client/${id}/delete`,
            );
        } catch (error) {
            console.log(error);
        }
    }
    return;
}
