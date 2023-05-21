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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className={styles.about_right}>
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
