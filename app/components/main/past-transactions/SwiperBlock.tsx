'use client'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './swiper.css';

// import required modules
import { Scrollbar } from 'swiper/modules';
import { dataCard } from './data-cards';
import { Slide } from './SwiperSlide';




export function SwiperBlock(){



    return(
        <Swiper
            slidesPerView="auto"
            scrollbar={{
                hide: false,
                draggable: true,
            }}
            spaceBetween={20}
            modules={[Scrollbar]}
            className="mySwiper"
        >
            {dataCard.map(el => (
                <SwiperSlide>
                    <Slide el={el}></Slide>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}