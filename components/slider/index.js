import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";



import "swiper/swiper-bundle.css"


import Link from "next/link";

function Slider({ slides }) {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);

  return (
    <div>
      <Swiper 
        modules={[Scrollbar, Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
        scrollbar={{ 
        draggable: true,
         hide: true,
        
        }}
        navigation={true}
      
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.link}>
              <img src={slide.image} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  );
}

export default Slider;
