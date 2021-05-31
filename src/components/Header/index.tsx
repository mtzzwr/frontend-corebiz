import Logo from '../../assets/img/logo.png'
import Menu from '../../assets/img/menu.png'
import Account from '../../assets/img/account.png'
import Cart from '../../assets/img/cart.png'
import './styles.css'

const Header = ({ quantity } : {quantity: number}) => {
    return (
        <div id="header">
            <div id="header_container">
                <div id="menu">
                    <img src={Menu} alt="Corebiz" width="22" height="15"/>
                </div>
                <div id="header_logo">
                    <img src={Logo} alt="Corebiz"/>
                </div>
                <div id="input_container">              
                    <input id="input_search" type="text" placeholder="O que está procurando?"/>
                </div>
                <div id="account_container">
                    <div id="my_account">
                        <img src={Account} alt="Corebiz" width="18" height="18"/>
                        <span> Minha conta</span>
                    </div>
                    <div id="cart_container" className="d-flex flex-md-row align-items-center">
                        <img src={Cart} alt="Corebiz" width="18" height="18"/>
                        <div id="cart_items" className="d-flex flex-md-row justify-content-center align-items-center">
                            <span>{quantity}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="input_container_mobile">              
                <input id="input_search" type="text" placeholder="O que está procurando?"/>
            </div>
        </div>
    )
}

export default Header