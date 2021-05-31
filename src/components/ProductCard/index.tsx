import { Product } from '../../types/product'
import { priceFormatted } from '../../utils/format'
import Star from '../../assets/img/star.png'
import OutlinedStar from '../../assets/img/outlined-star.png'
import Off from '../../assets/img/off.png'
import './styles.css'

const ProductCard = (props: any) => {

    const showInstallments = (product: Product) => {
        if (product.installments?.length === 0) return (<p></p>)
        return (
            <p>{`ou em ${getQuantity(product)}x de R$ ${priceFormatted(getValue(product) / 100)}`}</p>
        )
    }

    const getQuantity = (product: Product) => {
        return product.installments?.map(installment => installment.quantity)
    }

    const getValue = (product: Product) => {
        let value = 0;
        let valueList = product.installments?.map(installment => installment.value)
        if (valueList.length === 1) {
            valueList.map(v => value = v)
        }
        return value
    }

    const getRating = (product: Product) => {
        const rating = []
        for (let i = 0; i < 5; i++) {
            if (i < product.stars) rating.push(true)
            else rating.push(false)
        }

        return (
            <div id="rating">
                {rating.map(star => star ? <img src={Star} alt="Rating" /> : <img src={OutlinedStar} alt="Rating" />)}
            </div>
        )
    }

    const addToCart = () => {
        let cart = ''
        let cartCount = 0;
        if (localStorage.getItem('@shopping_cart') !== null) {
            cart = localStorage.getItem('@shopping_cart') || ''
            cartCount = parseInt(cart)
        }
        cartCount++
        cart = cartCount.toString()
        localStorage.setItem('@shopping_cart', cart)
        props.shoppingCart(cart)
    }

    return (
        <div key={props.product.productName} className="product_card">
            {
                props.product.listPrice !== null &&
                <div id="off_image">
                    <img src={Off} alt="" />
                </div>
            }
            <div id="product_image">
                <img src={props.product.imageUrl} alt="" />
            </div>
            <div id="product_details">
                <span id="product_name">{props.product.productName}</span>
                {getRating(props.product)}
                <span id="product_price">por {priceFormatted(props.product.price / 100)}</span>
                <span id="product_installments">{showInstallments(props.product)}</span>
                <button id="btn_buy" onClick={() => addToCart()}>
                    Comprar
            </button>
            </div>
        </div>
    )
}

export default ProductCard