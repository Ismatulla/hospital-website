import Slider from "react-slick";
import React from 'react';
import slider1 from '../assets/images/slider-2.avif'
import slider2 from '../assets/images/slider-4.avif'
import slider3 from '../assets/images/slider-5.avif'
import slider4 from '../assets/images/slider-6.avif'
function SliderImg(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <div >
            <Slider {...settings}>
                <div>
                    <img src={slider1} alt="" className=" lg:w-full md:w-full opacity-75 brightness-50 " />
                </div>
                <div>
                    <img src={slider2} alt="" className=" lg:w-full md:w-full opacity-75 brightness-50 " />
                </div>
                <div>
                    <img src={slider3} alt="" className=" lg:w-full md:w-full opacity-75 brightness-50 " />
                </div>
                <div>
                    <img src={slider4} alt="" className=" lg:w-full md:w-full opacity-75 brightness-50 " />
                </div>

            </Slider>
        </div>
    );
}

export default SliderImg;