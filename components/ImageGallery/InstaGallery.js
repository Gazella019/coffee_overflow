import React from 'react'
import styles from "./InstaGallery.module.css"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { riseWithFade, galleryAnimation, staggerChildernAnimate, wordAnimations } from '@/utils/animations'

const InastaGallery = ({galleryData}) => {
  return (
    <motion.div className={styles.container} initial="initial" animate="animate">
      <div className={styles.title_area}>
        <AnimateWords title="Helper robots for a better every day"/>
        <motion.div className={styles.text} variants={riseWithFade}>
          In this video, we'll build a modern landing page in Next.js with advanced loading animations using Framer Motion. We'll also utilize TailwindCSS to help style our page
        </motion.div>
      </div>
      <motion.div className={styles.instaGrid} variants={staggerChildernAnimate}>
        {galleryData.map((data) =>
          <motion.div className={styles.box} variants={galleryAnimation}>
            <Image 
              width={400}
              height={400}
              src={data.image}
              alt={data.title}
            />
          </motion.div>
          // <motion.div variants={galleryAnimation}>
          //   hello
          // </motion.div>
        )}
        
      </motion.div>
    </motion.div>
  )
}

const AnimateWords = ({title}) => {
  return (
    <motion.span variants={staggerChildernAnimate}>
      {title.split(" ").map((word, index) => (
        <motion.div key={index} className={styles.inline_block} variants={wordAnimations}>
          <motion.h1 key={index} className={styles.inline_block} variants={wordAnimations}>{word + "\u00A0"}</motion.h1>
        </motion.div>
      ))}
    </motion.span>
  )
}
export default InastaGallery