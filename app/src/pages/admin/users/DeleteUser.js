import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import api from '../../../services/api';

export const DeleteUser = () => {
  const idUser = useParams();
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
        excludeUser(idUser.idUser);
        Swal.fire('Excluído!', '', 'success');
        navigate(`/users/`);
      } else if (result.isDenied) {
        navigate(`/users/`);
      }
    })
    .catch((error) => console.log(error));

  async function excludeUser(id) {
    try {
      const res = await api.delete(
        `/api/users/${id}/delete`,
      );
    } catch (error) {
      console.log(error);
    }
  }
  return;
};
