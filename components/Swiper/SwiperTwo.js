import React, { useRef } from 'react'
import Image from 'next/image';
import styles from "./SwiperTwo.module.css"
import { Navigation, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperData from '@/data/swiperData';
import { BiMap } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

const SwiperTwo = () => {

    const swiperRef = useRef(null);
    const goNext = () => {
        swiperRef.current.slideNext();
    };
    
    const goPrev = () => {
        swiperRef.current.slidePrev();
    };

    const navigateTo = (index) => {
        swiperRef.current.slideTo(index);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Swiper
                    navigation={{
                        nextEl: '.swiperTwo-next',
                        prevEl: '.swiperTwo-prev'
                    }}
                    loop={true}
                    slidesPerView={1.5}
                    spaceBetween={24}
                    centeredSlides={true}
                    modules={[Navigation, EffectFade, Pagination]}
                    className={styles.swiper}
                    onSwiper={swiper => (swiperRef.current = swiper)}
                    >
                    {swiperData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slide}>
                                <Image src={data.imgUrl} 
                                    width={1000}
                                    height={1000}
                                    alt="img"
                                    className={styles.slide_image}
                                />
                                <div className={styles.slide_box}>
                                    <BiMap/>
                                    <p>
                                        swiper text
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className={styles.swiper_controller}>
                        <div className="swiperTwo-prev" onClick={goPrev}><AiOutlineArrowLeft className={styles.arrow}/></div>
                        <div className="swiperTwo-next" onClick={goNext}><AiOutlineArrowRight className={styles.arrow}/></div>
                    </div>
                </Swiper>
            </div>
            <div className={styles.swiper_navigation}>
                {swiperData.map((data, index) => (
                    <div key={index} onClick={() => navigateTo(index)}>{index + 1}</div>
                ))}
            </div>
        </div>
    )
}

export default SwiperTwo
