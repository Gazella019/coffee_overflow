import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import styles from  '@/styles/Hero.module.css';
import '@splidejs/react-splide/css';


{/* <img src="./images/hero2.jpg" alt="Image 2"/>
<img src="./images/hero2.jpg" alt="Image 2"/> */}

const Hero = () => {
  return (
    <div>
        <Splide hasTrack={ false }
        options={ {
            rewind: true,
        } }
        className={styles.splide}
        >
            <SplideTrack>
                <SplideSlide className={styles.splide_slide}>
                    <img src="./images/hero2.jpg" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide className={styles.splide_slide}>
                    <img src="./images/hero1.jpg" alt="Image 2"/>
                </SplideSlide>
            </SplideTrack>
        </Splide>
    </div>
  )
}

export default Hero
