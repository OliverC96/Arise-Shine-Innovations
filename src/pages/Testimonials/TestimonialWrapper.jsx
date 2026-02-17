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
            <div className={`bg-slate-800 rounded-3xl ${dots === currSlide ? 'w-8' : 'w-4'} h-1.5`} />
        )
    };

    return (
        <div className="h-[90vh] px-14 sm:px-24 md:px-32 xl:px-60 flex flex-col justify-center gap-7 lg:gap-3 bg-cream">
            <h1 className="text-3xl lg:text-4xl text-slate-800 font-header font-bold">
                Testimonials
            </h1>
            {/* Testimonial Carousel Version #1 (Md/Lg Screen Sizes) */}
            <div className="hidden sm:block">
                <Slider {...largeFormatSettings} className="p-6">
                    {
                        clientTestimonials.testimonials.map(t => {
                            return <Testimonial {...t} />
                        })
                    }
                </Slider>
            </div>
            {/* Testimonial Carousel Version #2 (Sm Screen Sizes) */}
            <div className="sm:hidden">
                <Slider {...smallFormatSettings} className="">
                    {
                        clientTestimonials.testimonials.map(t => {
                            return <Testimonial {...t} />
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}