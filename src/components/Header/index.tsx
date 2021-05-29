import Logo from '../../assets/img/logo.png'
import Account from '../../assets/img/account.png'
import Cart from '../../assets/img/cart.png'
import './styles.css'

const Header = () => {
    return (
        <div id="header" className="d-flex flex-md-row align-items-center p-3 px-md-4 mb-3">
            <div id="header__container" className="container">
                <div id="header_logo">
                    <img src={Logo} alt="Corebiz" width="181" height="41"/>
                </div>
                <div id="input_container">              
                    <input id="input_search" type="text" placeholder="O que está procurando?"/>
                </div>
                <div id="account_container" className="d-flex flex-md-row align-items-center">
                    <img src={Account} alt="Corebiz" width="18" height="18"/>
                    <span> Minha conta</span>
                    <div id="cart_container" className="d-flex flex-md-row align-items-center">
                    <img src={Cart} alt="Corebiz" width="18" height="18"/>
                    <div id="cart_items">
                        <span>2</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header