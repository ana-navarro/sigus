import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './list.style.css';
import api from '../../../../services/api'

export const ListUser = props => {
    const [users, setUsers] = useState();
    const idCompany = props.idCompany

    const getData = async () => {
        try {
            const response = await api.get(`api/company/${idCompany}/users`);
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className='text-center'>
                <span className='text-dark mt-5'>Usuários na Empresa:</span>
            </div>
            <div id='users' className='p-4'>
                <table striped bordered hover id="table">
                    <tr className='text-center'>
                        <th className='text-center'>Nome</th>
                        <th className='text-center'>Ação</th>
                    </tr>
                    {users?.map((user) => (
                        <tr key={user._id}>
                            <td className='text-center'>
                                {user.name}
                            </td>

                            <td className='text-center'>
                                <Button className="btn btn-success m-2"><FaPen /></Button>
                                <Button className="btn btn-danger"><FaTrashAlt /></Button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
