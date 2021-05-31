import axios from "axios"
import { useEffect, useState } from "react"
import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Newsletter from "../../components/Newsletter"
import ProductCard from "../../components/ProductCard"
import { Product } from "../../types/product"
import { BASE_URL } from "../../utils/requests"
import './styles.css'

const Home = () => {
    const [products, setProducts] = useState<Product[]>()
    const [cartQuantity, setCartQuantity] = useState<any>(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then(response => {
                const data = response.data as Product[]
                setProducts(data)
            })

        if (localStorage.getItem('@shopping_cart') !== null) {
            setCartQuantity(localStorage.getItem('@shopping_cart'))
        }
    }, [setProducts, setCartQuantity])

    const updateCart = (value: number) => {
        setCartQuantity(value);
    }

    return (
        <>
            <Header quantity={cartQuantity} />
            <Carousel />
            <div id="products_container" className="container">
                <div id="products_title">
                    <h4>Mais Vendidos</h4>
                    <div className="line"></div>
                </div>
                <div id="products_list">
                    {products?.map((product) => (
                    <ProductCard key={product.productId} product={product}
                        shoppingCart={(quantity: any) => updateCart(quantity)} />
                    ))}
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )

}

export default Home