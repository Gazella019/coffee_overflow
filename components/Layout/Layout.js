import React from 'react'
import styles from './layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout