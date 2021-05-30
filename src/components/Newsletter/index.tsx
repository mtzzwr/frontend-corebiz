import { useState } from 'react'
import * as EmailValidator from 'email-validator';
import './styles.css'
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';

const Newsletter = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorName, setErrorName] = useState<string>('')
    const [registered, setRegistered] = useState<boolean>(false)

    const validateInputs = () => {
        setErrorEmail('')
        setErrorName('')
        if (name.length < 3 && !EmailValidator.validate(email)) {
            setErrorName('Preencha com seu nome completo')
            setErrorEmail('Preencha com um email válido')
            return false
        } else if (!EmailValidator.validate(email)) {
            setErrorEmail('Preencha com um email válido')
            return false
        } else if (name.length < 3) {
            setErrorName('Preencha com seu nome completo')
            return false
        } else {
            return true
        }
    }

    const handleSubmit = () => {
        if (validateInputs()) {
            axios.post(`${BASE_URL}/newsletter`, {
                email: email,
                name: name
            })
                .then(response => {
                    console.log(response)
                    setRegistered(true)
                    setName('')
                    setEmail('')
                })
        }
    }

    return (
        <>
            {registered ? (
                <>
                    <div id="registered">
                        <h4>Seu e-mail foi cadastrado com sucesso!</h4>
                        <span>A partir de agora você receberá as novidades e ofertas exclusivas</span>
                        <button onClick={() => {
                            setRegistered(false)
                        }}>Cadastrar novo e-mail</button>
                    </div>
                </>
            ) : (
                <>
                    <div id="newsletter_container">
                        <div>
                            <h4>
                                Participe de nossas news com promoções e novidades!
                            </h4>
                        </div>
                        <div id="newsletter_form">
                            <div className="input_container">
                                <input className={errorName ? 'input_error' : ''} type="text" onChange={(name_digitted) => {
                                    setName(name_digitted.target.value)
                                }} placeholder='Digite seu nome' />
                                <span className="error_msg">{errorName}</span>
                            </div>
                            <div className="input_container">
                                <input className={errorEmail ? 'input_error' : ''} type="text" onChange={(email_digitted) => {
                                    setEmail(email_digitted.target.value)
                                }} placeholder='Digite seu e-mail...' />
                                <span className="error_msg">{errorEmail}</span>
                            </div>
                            <button id="btn_send" onClick={handleSubmit}>Eu quero!</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )

}

export default Newsletter