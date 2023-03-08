import React from 'react'
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about_section}>
        <div className={styles.about_left}>
            <h1>
                ABOUT ME
            </h1>
            <p>
            Thus, gentle reader, I have given thee a faithful history of my travels for sixteen years and above seven months: wherein I have not been so studious of ornament as of truth. I could, perhaps, like others, have astonished thee with strange improbable tales.
            </p>
        </div>
        <div className={styles.about_right}>
            right
        </div>
    </div>
  )
}

export default About
