import React from 'react'
import styles from './About.module.css';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion'

const About = () => {
  return (
    <div className={styles.about_section}>
        <motion.div className={styles.about_left}
        variants={{
            hidden: {opacity:0, y:75},
            visible: {opacity:1, y:0},
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition= {{duration: .5}}>
            <h1>
                ABOUT ME
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </motion.div>
        <motion.div className={styles.about_right}
        variants={{
            hidden: {opacity:0, y:75},
            visible: {opacity:1, y:0},
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition= {{duration: .3}}>
            <div className={styles.about_img}>
                <img
                    src="/images/aboutme.jpg"
                    alt="about-me"
                />
            </div>
        </motion.div>
    </div>
  )
}

export default About
