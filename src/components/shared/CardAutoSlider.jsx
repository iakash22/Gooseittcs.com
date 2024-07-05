import React, { useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcNext, FcPrevious } from "react-icons/fc";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import SlideCard from './SlideCard';



const CardAutoSlider = ({ data, nav,autoSlide,page }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='sm:px-4 md:px-0 px-4 w-full'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#650704',
                    '--swiper-pagination-color': '#1a73e9',
                    width: "100%"
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
                spaceBetween={32}
                navigation={nav}
                slidesPerView={1}
                grabCursor={true}
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        // spaceBetween : 50,
                    },
                    968: {
                        slidesPerView: 3,
                    },
                }}
                pagination={page ? { clickable: true, dynamicBullets: true, } : false}
                scrollbar={{ draggable: true }}
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
                    data.map((cardData, index) => (
                        <SwiperSlide key={index} style={{ borderRadius: "15px" }}>
                            <SlideCard
                                data={cardData}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </div>
    )
}

export default CardAutoSlider