import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div className="pt-8">
            <Carousel showStatus={false} showThumbs={false}>
                <div className="p-7">
                    <img  src="https://i.postimg.cc/66jfN41T/banner-image.jpg" alt="banner" />
                   
                </div>
                <div>
                    <img  src="https://i.postimg.cc/fyL79Mkw/maggold.jpg" alt="maggold" />
             
                </div>
                <div>
                    <img  src="https://i.postimg.cc/tTDtJsqS/treeroot.jpg" alt="troot" />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;