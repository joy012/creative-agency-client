import React from 'react';
import Slider from "react-slick";
import './Carousel.css';
import banner1 from '../../../images/carousel-1.png';
import banner2 from '../../../images/carousel-2.png';
import banner3 from '../../../images/carousel-3.png';
import banner4 from '../../../images/carousel-4.png';
import banner5 from '../../../images/carousel-5.png';

const Carousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        autoplay:true,
        dots: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="p-5 carousel-bg mb-5">
            <div className="pb-4" >
                <h2 className="text-center text-white pb-5">Here are some of our <span style={{color: '#7AB259'}}>Works</span></h2>
                <Slider {...settings}>
                    <div className='px-3 img-container'>
                        <img className='w-100' src={banner1} alt="" />
                    </div>
                    <div className='px-3 img-container'>
                        <img className='w-100' src={banner2} alt="" />
                    </div>
                    <div className='px-3 img-container'>
                        <img className='w-100 rounded' src={banner3} alt="" />
                    </div>
                    <div className='px-3 img-container'>
                        <img className='w-100' src={banner4} alt="" />
                    </div>
                    <div className='px-3 img-container'>
                        <img className='w-100' src={banner5} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;