/*import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Adjust import path to use the full bundle CSS
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper/core';
import styles from '@/app/styles/events.module.css'; // Adjust import path according to your project structure

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Events = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Events</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className={styles.swipercontainer}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <img src="/img1.png" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img2.png" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img3.png" alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img4.png" alt="Image 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;*/
