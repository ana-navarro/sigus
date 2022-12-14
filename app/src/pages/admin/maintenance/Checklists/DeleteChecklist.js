import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../../../services/api';

export const DeleteChecklist = () => {
  const { idChecklist } = useParams();
  const navigate = useNavigate();

  Swal.fire({
    title: 'Você deseja realmente excluir?',
    showDenyButton: true,
    confirmButtonText: 'Sim',
    denyButtonText: 'Não',
    allowOutsideClick: false,
    allowEscapeKey: false,
  })
    .then((result) => {
      if (result.isConfirmed) {
        excludeChecklist(idChecklist);
        Swal.fire('Excluído!', '', 'success');
        navigate(`/maintenance/installations`);
      } else if (result.isDenied) {
        navigate(`/maintenance/installations`);
      }
    })
    .catch((error) => console.log(error));

  const excludeChecklist = async () => {
    try {
      const checklist = api.delete(
        `api/technical/checklist/remove/${idChecklist}`,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return;
};
