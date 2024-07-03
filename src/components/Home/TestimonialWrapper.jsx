import { useState } from "react";
import Testimonial from "./Testimonial";
import clientTestimonials from "../../data/testimonials";
import Slider from "react-slick";
import {
    PrevArrow, HiddenPrevArrow,
    NextArrow, HiddenNextArrow
} from "../../utils/carousel-utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialWrapper() {

    const [currSlide, setCurrSlide] = useState(0);

    const smallFormatSettings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <HiddenNextArrow />,
        prevArrow: <HiddenPrevArrow />,
        afterChange: function(index) {
            setCurrSlide(index);
        },
        appendDots: (dots) => (
            <div className="">
                <ul className="flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: (dots) => (
            <div className={`bg-gold rounded-3xl ${dots === currSlide ? 'w-8' : 'w-4'} h-1.5 mt-3`} />
        )
    }

    const largeFormatSettings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: function(index) {
            setCurrSlide(index);
        },
        appendDots: (dots) => (
            <div className="">
                <ul className="flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: (dots) => (
            <div className={`bg-gold rounded-3xl ${dots === currSlide ? 'w-8' : 'w-4'} h-1.5`} />
        )
    };

    return (
        <div className="py-14 sm:py-24 md:py-32 px-14 sm:px-24 md:px-32 xl:px-60 flex flex-col gap-7 lg:gap-3 bg-green-dark">
            <h1 className="text-3xl lg:text-4xl text-gold font-header font-bold">
                Testimonials
            </h1>
            <div className="hidden lg:block">
                <Slider {...largeFormatSettings} className="p-6 lg:hidden">
                    {
                        clientTestimonials.map(t => {
                            return <Testimonial {...t} />
                        })
                    }
                </Slider>
            </div>
            <div className="lg:hidden">
                <Slider {...smallFormatSettings} className="lg:hidden">
                    {
                        clientTestimonials.map(t => {
                            return <Testimonial {...t} />
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}