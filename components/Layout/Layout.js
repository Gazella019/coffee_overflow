import React from 'react'
import styles from './layout.module.css'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default Layout