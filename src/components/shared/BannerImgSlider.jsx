import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcNext, FcPrevious } from "react-icons/fc";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/thumbs';



const BannerImgSlider = ({ data, nav, autoSlide, page }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='w-full'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#650704',
                    '--swiper-pagination-color': '#1a73e9',
                    width: "100%"
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
                spaceBetween={30}
                navigation={nav}
                slidesPerView={'auto'}
                grabCursor={true}
                breakpoints={{
                    600: {
                        slidesPerView: 1,
                    },
                    968: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween : 610
                    }
                }}
                loop={true}
                pagination={page ? { clickable: true, dynamicBullets: true, } : false}
                scrollbar={{ draggable: true,}}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={(swiper) => "console.log(swiper)"}
                onSlideChange={() => "console.log('slide change')"}
                autoplay={autoSlide ? {
                    delay: 2500,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true
                } : false}
            >
                {
                    data.map((imgData, index) => (
                        <SwiperSlide key={index} style={{ borderRadius: "15px" }}>
                            <ImageSlide
                                data={imgData}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </div>
    )
}

export default BannerImgSlider;


const ImageSlide = ({data}) => {
    return (
        <div className='md:w-[592px] xl:w-[625.5px] w-full sm:h-auto h-[380px]'>
            <img
                src={data}
                className="max-w-full sm:object-fill h-full object-cover"
            />
        </div>
    )
}