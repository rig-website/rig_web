'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "@/app/styles/carousel.module.css";
import Image from 'next/image';
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
            breakpoints={{
              320: {   // Mobile
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {   // Small screens
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1170: {  // Tablets and larger
                slidesPerView: 3,
                spaceBetween: 20,
              }
            }}
            centeredSlides={false}  // Ensure the first slide is at the beginning
            initialSlide={0}  // Start with the first slide
            spaceBetween={30}
            pagination={{ type: 'fraction' }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={styles.card}>
                  <div className={styles.image}>
                    <Image src={slide.image} alt={slide.name} width={500} height={200}/>
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
