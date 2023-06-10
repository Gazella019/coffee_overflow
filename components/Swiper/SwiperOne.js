import React from 'react'
import styles from "./SwiperOne.module.css"
import { Navigation, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperData from '@/data/swiperData';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import { pageExtensions } from '@/next.config';

const SwiperOne = () => {
  return (
    <div className={styles.container}>
      <Swiper
        style={{
          "--swiper-pagination-color": "#FFBA08",
        }}
        navigation
        loop
        pagination={
            {
                // el: ".swiper_pagination",
                clickable: 'true',
            }
        }
        slidesPerView={3}
        // spaceBetween={100}
        modules={[Navigation, EffectFade, Pagination]}
        className={styles.swiper}
        effect='fade'
        >
        {swiperData.map((data) => (
            <SwiperSlide>
                {/* {data.title} */}
                <img src={data.imgUrl} className={styles.slide_image}/>
            </SwiperSlide>
        ))}
    </Swiper>
        {/* <div className={"test"}>hello</div> */}
    </div>
  )
}

export default SwiperOne
