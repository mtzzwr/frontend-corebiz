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
import ProductCard from '../ProductCard'

const Products = (updateCart : any) => {

    const [products, setProducts] = useState<Product[]>()
    
    const [cartQuantity, setCartQuantity] = useState<any>(0);

    useEffect(() => {
        if(typeof localStorage.getItem('@shopping_cart') === 'number'){
            setCartQuantity(localStorage.getItem('@shopping_cart'))
        }
    }, [setCartQuantity])

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



    return (
        <>
        </>
    )

}

export default Products