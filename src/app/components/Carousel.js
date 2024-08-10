'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "@/app/styles/carousel.module.css";

const Carousel = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const slides = [
    { id: 1, image: '/card1.jpg', name: 'Riggu Robot' },
    { id: 2, image: '/card2.jpg', name: 'Agribot' },
    { id: 3, image: '/card3.jpg', name: 'Multi Robot' },
    { id: 4, image: '/card4.jpg', name: 'Swab Testing Robot' }
  ];

  return (
    
    <>
    <div className={styles.title}><div>OUR PROJECTS</div></div>
    <div className={styles.body}>
      <div className={styles.container}>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={20 }
          pagination={{ type: 'bullets' }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.card}>
                  <div className={styles.image}>
                    <img src={slide.image} alt={slide.name} />
                  </div>
                  <div className={styles.nameproject}>
                    <span className={styles.name}>{slide.name}</span>
                  </div>
           
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default Carousel;
