import React from 'react'
import axios from 'axios'
import { PaymentButton } from './styled.style'
import api from '../../services/api'

export const PayButton = ({ valuePayment, month, email, id }) => {
    const handleCheckout = async () => {
        const body = [
            valuePayment,
            month,
            email
        ]
        await api.post(`/api/stripe/${id}/payment`, body)
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url
                }
            }).catch((err) => console.log(err))
    }
    return (
        <div><PaymentButton onClick={() => handleCheckout()}>Pagar</PaymentButton></div>
    )
}
