import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export const DeletePop = ({ cod }) => {
  const navigate = useNavigate();
  const [id, setId] = useState(cod);

  Swal.fire({
    title: 'Você deseja realmente excluir?',
    showDenyButton: true,
    confirmButtonText: 'Excluir',
    denyButtonText: 'Não',
    allowOutsideClick: false,
    allowEscapeKey: false,
  })
    .then((result) => {
      if (result.isConfirmed) {
        excludePop(id);
        Swal.fire('Excluído!', '', 'success');
        window.location.reload();
      } else if (result.isDenied) {
        navigate(`/maintenance/pop`);
      }
    })
    .catch((error) => console.log(error));

  async function excludePop(id) {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:5000/api/pops/delete/${id}`,
      );
    } catch (error) {
      console.log(error);
    }
  }
  return;
};
