import HeadphoneIcon from '../../assets/img/headphone.png'
import EmailIcon from '../../assets/img/email.png'
import LogoWhite from '../../assets/img/logo-white.png'
import Vtex from '../../assets/img/vtex.png'
import './styles.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer_container">
                    <div id="location">
                        <div id="location_title">
                            <h2>Localização</h2>
                            <div className="line"></div>
                        </div>
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                        <p>Alphavile SP</p>
                        <p>brasil@corebiz.ag</p>
                        <p>+55 11 3090 1039</p>
                    </div>
                    <div id="contact">
                        <button className="contact_button">
                            <div className="button_icon">
                                <img src={EmailIcon} alt="" width="16" height="13"/>
                            </div>
                            <span>ENTRE EM CONTATO</span>
                        </button>
                        <button className="contact_button">
                            <div id="second_button" className="button_icon">
                                <img src={HeadphoneIcon} alt="" width="15" height="18"/>
                            </div>
                            <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                        </button>
                    </div>
                    <div id="logos">
                        <div className="logo_area">
                            <span>Created by</span>
                            <img src={LogoWhite} alt="" width="71" height="18"/>
                        </div>
                        <div className="logo_area">
                            <span>Powered by</span>
                            <img src={Vtex} alt="" width="52" height="18"/>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="grey_area">

            </div>
        </>
    )
}

export default Footer