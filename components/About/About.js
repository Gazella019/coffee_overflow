import React from 'react'
import styles from './About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.about_section}>
        <div className={styles.about_left}>
            <h1>
                ABOUT ME
            </h1>
            <p>
            And purpose resonates. Sincere core values are key to connecting with real people in a digital first society.
            </p>
            <p>
            As an agency that exists to create remarkably beautiful things that make an impact, shape culture seek  fearless partners with belief in their brand to create.
            </p>
            <p>
            Experiences that will empower action, and build and legacy through innovation.
            </p>
        </div>
        <div className={styles.about_right}>
            {/* <Image
                src="/images/aboutme.jpg"
                alt="about-me"
                width={500}
                height={700}
            /> */}
            <div className={styles.about_img}>
                <img
                    src="/images/aboutme.jpg"
                    alt="about-me"
                />
            </div>
        </div>
    </div>
  )
}

export default About
