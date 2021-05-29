import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as Slider } from 'react-responsive-carousel'
import Banner from '../../assets/img/full-banner.png'
import './styles.css'

const Carousel = () => {
    return (
        <>
            <Slider className="carousel" showArrows={false} showThumbs={false} showStatus={false}>
                <div className="carousel_item">
                    {/* <img className="carousel_image" src={Banner} /> */}
                </div>
                <div className="carousel_item">
                    {/* <img className="carousel_image" src={Banner} /> */}
                </div>
                <div className="carousel_item">
                    {/* <img className="carousel_image" src={Banner} /> */}
                </div>
            </Slider>
        </>
    )
}

export default Carousel