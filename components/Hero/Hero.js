import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import styles from './Hero.module.css';
import Image from 'next/image';
import '@splidejs/react-splide/css';


{/* <img src="./images/hero2.jpg" alt="Image 2"/>
<img src="./images/hero2.jpg" alt="Image 2"/> */}

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Splide hasTrack={ false }
            options={ {
                type         : 'loop',
                gap          : '1rem',
                autoplay     : true,
                pauseOnHover : false,
                resetProgress: false,
            } }
            className={styles.splide}
            >
                <SplideTrack>
                    <SplideSlide className={styles.splide_slide}>
                        <Image src="./images/hero2.jpg"
                            width={500}
                            height={500}
                            alt="img"
                        />
                        <div className={styles.hero_text}>
                            <h1>
                                Travel / Coffee / Code
                            </h1>
                            <p>
                                Explore anying...
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={styles.splide_slide}>
                        <Image src="./images/hero1.jpg"
                            width={500}
                            height={500}
                            alt="img"
                        />
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    </div>
  )
}

export default Hero
