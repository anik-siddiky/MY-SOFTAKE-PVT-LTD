import carouselImg0 from '../../assets/bannerImages/photo-0.jpg'
import carouselImg1 from '../../assets/bannerImages/photo-1.jpg'
import carouselImg2 from '../../assets/bannerImages/photo-2.jpg'
import carouselImg3 from '../../assets/bannerImages/photo-3.jpg'
import carouselImg4 from '../../assets/bannerImages/photo-4.jpg'
import carouselImg5 from '../../assets/bannerImages/photo-5.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const HeroSection = () => {
    return (
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
                showStatus={false}
                stopOnHover
                dynamicHeight={false}
                showIndicators={false}
            >
                <img src={carouselImg0} alt="" className="w-full h-[250px] lg:h-[350px] object-cover" />
                <img src={carouselImg1} alt="" className="w-full h-[250px] lg:h-[350px] object-cover" />
                <img src={carouselImg2} alt="" className="w-full h-[250px] lg:h-[350px] object-cover" />
                <img src={carouselImg3} alt="" className="w-full h-[250px] lg:h-[350px] object-cover" />
                <img src={carouselImg4} alt="" className="w-full h-[250px] lg:h-[350px] object-cover" />
                <img src={carouselImg5} alt="" className="w-full h-[250px] lg:h-[350px] object-cover" />
            </Carousel>

        </div>
    );
};

export default HeroSection;