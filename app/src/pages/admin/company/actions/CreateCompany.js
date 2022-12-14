import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FormButton, SubmitButton } from '../styled.style';
import api from '../../../../services/api';

export const CreateCompanyButton = (props) => {
    const name = props.name;
    const email = props.email;
    const cnpj = props.cnpj;
    const phone = props.phone;
    const idAddress = props.idAddress;

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newCompany = {
            name, email, cnpj, phone, idAddress
        }
        try {
            const response = await api.post("/api/company/add", newCompany);
            toast.dismiss();
            toast.success(response.data.msg);
            navigate('/company')
        } catch (error) {
            toast.error("Deu algum erro!");
            console.log(error)
        }
    }
    return (
        <FormButton>
            <ToastContainer />
            <SubmitButton
                data-testid="submit-btn-add"
                onClick={handleSubmit}
                disabled={!name || !cnpj || !phone || !email}>Enviar</SubmitButton>
        </FormButton>
    )
}
