import { useState } from "react"
import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Newsletter from "../../components/Newsletter"
import Products from "../../components/Products"

const Home = () => {

    const [cartQuantity, setCartQuantity] = useState<number>(0);

    const updateCart = (value : number) => {
        setCartQuantity(value);
    }

    return ( 
        <>
            <Header/>
            <Carousel/>
            <Products updateCart={updateCart}/>
            <Newsletter/>
            <Footer/>
        </>
    )

}

export default Home