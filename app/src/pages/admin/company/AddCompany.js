import React, { useState } from 'react'
import { EmailInput, FormContent, FormTitle, InputGroup, NameInput, FormBody, PhoneText, CnpjInput } from './styled.style';
import { ToastContainer } from 'react-toastify';
import { CreateCompanyButton } from './actions/CreateCompany';
import InputMask from "react-input-mask";

export const AddCompany = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState();
    const [phone, setPhone] = useState();

    const handlePhoneInput = ({ target: { value } }) => setPhone(value);
    const handleCnpjInput = ({ target: { value } }) => setCnpj(value);

    return (
        <>
            <ToastContainer />
            <div id=''>
                <h3 className='text-center p-4' data-testid="add-company-header" aria-label='Adicionar uma empresa'>Adicionar nova Empresa</h3>
                <FormBody data-testid="add-company-form">
                    <FormTitle aria-label='Informações'>Informações: </FormTitle>

                    <InputGroup>
                        <NameInput
                            data-testid="company-add-name"
                            label="Nome"
                            aria-label='Nome da Empresa'
                            type="text"
                            placeholder="Nome"
                            InputLabelProps={{ shrink: true }}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            variant="filled"
                            required />
                    </InputGroup>


                    <FormContent>
                        <EmailInput
                            label="Email"
                            aria-label='Email da Empresa'
                            type="email"
                            data-testid="company-add-email"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            variant="filled"
                            required />
                    </FormContent>

                    <FormContent>
                        <InputMask mask="(99)99999-9999" value={phone} onChange={handlePhoneInput}>
                            <PhoneText
                                label="Telefone"
                                aria-label='Telefone da Empresa'
                                data-testid="company-add-phone"
                                type="text"
                                placeholder="Telefone"
                                fullWidth
                                variant="filled"
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                        </InputMask>
                    </FormContent>

                    <FormContent>
                        <InputMask mask="99.999.999/9999-99" value={cnpj} onChange={handleCnpjInput}>
                            <CnpjInput
                                label="CNPJ"
                                data-testid="company-add-cnpj"
                                aria-label='CNPJ da Empresa'
                                type="text"
                                placeholder="CNPJ"
                                fullWidth
                                variant="filled"
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                        </InputMask>
                    </FormContent>

                    <CreateCompanyButton
                        name={name}
                        email={email}
                        cnpj={cnpj}
                        phone={phone}
                        disabled={!name || !email || !phone || !cnpj}
                        data-testid="company-add-submit-btn"
                    />
                </FormBody>
            </div>
        </>
    )
}
