import axios from 'axios'
import { useEffect, useState } from 'react'
import { Product } from '../../types/product'
import { priceFormatted } from '../../utils/format'
import { BASE_URL } from '../../utils/requests'
import './styles.css'

const Products = () => {

    const [products, setProducts] = useState<Product[]>()

    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
        .then(response => {
            const data = response.data as Product[]
            setProducts(data)
        })
    }, [])

    return (
        <div id="products_container" className="container">
            <div id="products_title">
                <h4>Mais Vendidos</h4>
                <div className="line"></div>
            </div>
            <div id="products_list">
                {products?.map((product) => (
                    <div className="product_card">
                        <div id="product_image">
                            <img src={product.imageUrl} alt="" />
                        </div>
                        <div id="product_details">
                            <p>{product.productName}</p>
                            <p>por {priceFormatted(product.price / 100)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Products