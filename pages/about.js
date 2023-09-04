import React from 'react'
import About from '@/components/About/About'
import styles from '@/styles/page.module.css'
import { motion } from 'framer-motion';
import fadeTransition from '@/components/Animate/fadeTransition';

const about = () => {
  return (
    // <motion.div 
    //   initial={{opacity: 0, y: "100%"}}
    //   animate={{opacity: 1, y: "0%"}}
    //   exit={{opacity: 1}}
    //   transition={{duration: .3}}
    //   className={styles.about_container}>
    // <fadeTransition>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .6 }}
      className={styles.container}
    >
      <About/>
    </motion.div>
    // </fadeTransition>
  )
}

export default about
