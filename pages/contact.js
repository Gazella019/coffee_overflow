import React from 'react'
import Contact from '@/components/Contact/Contact'
import { motion } from 'framer-motion'
import fadeTransition from '@/components/Animate/fadeTransition'
import styles from '@/styles/page.module.css'

const contact = () => {
  return (
    // <fadeTransition>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .6 }}
      className={styles.container}
    >
      <Contact/>
    </motion.div>
    // </fadeTransition>
  )
}

export default contact
