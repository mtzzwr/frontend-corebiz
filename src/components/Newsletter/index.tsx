import { Input } from 'semantic-ui-react'
import './styles.css'

const Newsletter = () => {

    return (
        <div id="newsletter_container">
            <div>
                <h4>
                    Participe de nossas news com promoções e novidades!
                </h4>
            </div>
            <div id="newsletter_form">
                <Input placeholder='Digite seu nome' />
                <Input placeholder='Digite seu e-mail...' />
                <input id="btn_send" type="button" value="Eu quero!" />
            </div>
        </div>
    )

}

export default Newsletter