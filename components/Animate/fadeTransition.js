import React from 'react'
import { motion } from 'framer-motion'

const fadeTransition = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
        {children}
    </motion.div>
  )
}
export default fadeTransition
