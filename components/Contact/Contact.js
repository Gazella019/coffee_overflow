import React from 'react'
import Layout from '../Layout/Layout';
import styles from './Contact.module.css';
import About from '../About/About';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className={styles.right}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>
  )
}

export default Contact
