import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';
import api from '../../../services/api';

export const DeleteInstallation = () => {
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
    }).then((result) => {
        if (result.isConfirmed) {
            excluirInstallation(id.idInstallation);
            Swal.fire('Excluído!', '', 'success');
            navigate(`/installations/`);
        } else {
            navigate(`/installations/`);
        }
    })

    async function excluirInstallation(id) {
        try {
            const res = await api.delete(
                `/api/installations_numbers/${id}/delete`,
            );
        } catch (error) {
            console.log(error)
        }
    }
    return;
}
