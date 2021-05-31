import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as Slider } from 'react-responsive-carousel'
import Banner from '../../assets/img/full-banner.png'
import './styles.css'

const Carousel = () => {
    return (
        <>
            <div className="banner_background">
                <div className="banner_text">
                    <p>Olá, o que você está buscando?</p>
                    <h1>Criar ou migrar seu e-commerce?</h1>
                </div>
            </div>
        </>
    )
}

export default Carousel