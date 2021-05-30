import axios from 'axios'
import { useEffect, useState } from 'react'
import FlatList from 'flatlist-react'
import { Product } from '../../types/product'
import { priceFormatted } from '../../utils/format'
import { BASE_URL } from '../../utils/requests'
import { Carousel as Slider } from 'react-responsive-carousel'
import Star from '../../assets/img/star.png'
import OutlinedStar from '../../assets/img/outlined-star.png'
import './styles.css'

const Products = (updateCart : any) => {

    const [products, setProducts] = useState<Product[]>()
    let [shoppingCart, setShoppingCart] = useState(localStorage.getItem('@shopping_cart') || 0)

    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then(response => {
                const data = response.data as Product[]
                setProducts(data)
            })
    }, [])

    const showInstallments = (product : Product) => {
        if(product.installments?.length === 0) return (<></>)
        return (
            <p>{`ou em ${getQuantity(product)}x de R$ ${priceFormatted(getValue(product) / 100)}`}</p>
        )
    }

    const getQuantity = (product : Product) => {
        return product.installments?.map(installment => installment.quantity)
    }

    const getValue = (product : Product) => {
        let value = 0;
        let valueList = product.installments?.map(installment => installment.value)
        if(valueList.length === 1){
            valueList.map(v => value = v)
        }
        return value
    }

    const getRating = (product : Product) => {
        const rating = []
        for(let i = 0; i < 5; i++){
            if(i < product.stars) rating.push(true)
            else rating.push(false)
        }

        return (
            <div id="rating">
                {rating.map(star => star ?  <img src={Star} alt="Rating" /> : <img src={OutlinedStar} alt="Rating" />)}
            </div>
        )
    }

    const addToCart = () => {
        setShoppingCart(typeof shoppingCart === 'number' ? shoppingCart++ : 0)
        localStorage.setItem('@shopping_cart', shoppingCart.toString())        
    }

    return (
        <div id="products_container" className="container">
            <div id="products_title">
                <h4>Mais Vendidos</h4>
                <div className="line"></div>
            </div>
            <div id="products_list">
                {products?.map((product) => (
                    <div key={product.productId} className="product_card">
                        <div id="product_image">
                            <img src={product.imageUrl} alt="" />
                        </div>
                        <div id="product_details">
                            <span id="product_name">{product.productName}</span>
                            {getRating(product)}
                            <span id="product_price">por {priceFormatted(product.price / 100)}</span>
                            <span id="product_installments">{showInstallments(product)}</span>
                            <button id="btn_buy" onClick={() => addToCart()}>
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Products