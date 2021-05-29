import { useState } from 'react'
import { Input } from 'semantic-ui-react'
import * as EmailValidator from 'email-validator';
import './styles.css'

const Newsletter = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<boolean>(true)
    const [errorName, setErrorName] = useState<boolean>(true)

    const validInputs = () => {
        if (name.length < 3) {
            setErrorName(false);
        }

        if (!EmailValidator.validate(email)) {
            setErrorEmail(false)
        }
    }

    const handleSubmit = () => {

        if (name.length < 3) {
            setErrorName(false);
        } else {
            setErrorName(true)
        }

        if (!EmailValidator.validate(email)) {
            setErrorEmail(false)
        } else {
            setErrorEmail(true)
        }

        console.log("nome", name)
        console.log("email", email)
        console.log("erro nome", errorName)
        console.log("erro email", errorEmail)

    }

    return (
        <div id="newsletter_container">
            <div>
                <h4>
                    Participe de nossas news com promoções e novidades!
                </h4>
            </div>
            <div id="newsletter_form">
                <div className="input_container">
                    <Input onChange={(name_digitted) => {
                        setName(name_digitted.target.value)
                    }} placeholder='Digite seu nome' />
                    <span hidden={errorName} className="error_msg">Preencha com seu nome completo</span>
                </div>
                <div className="input_container">
                    <Input onChange={(email_digitted) => {
                        setEmail(email_digitted.target.value)
                    }} placeholder='Digite seu e-mail...' />
                    <span hidden={errorEmail} className="error_msg">Preencha com um e-mail válido</span>
                </div>
                <button id="btn_send" onClick={handleSubmit}>Eu quero!</button>
            </div>
        </div>
    )

}

export default Newsletter