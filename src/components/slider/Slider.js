import SimpleImageSlider from "react-simple-image-slider";
import './Slider.css'

import img1 from '../../assets/slide1.jpg';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide3.jpg';
import img4 from '../../assets/slide4.jpg';
import img5 from '../../assets/slide5.jpg';
import img6 from '../../assets/slide6.jpg';

const images = [
    { url : img1 },
    { url : img2 },
    { url : img3 },
    { url : img4 },
    { url : img5 },
    { url : img6 },
]

const ImageSlider = () => {
    return(
        <div className="slider">
        <SimpleImageSlider
        width={"100%"}
        height={"100%"}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.3}
        autoPlay={true}
        />
        </div>
    )
}
export default ImageSlider;