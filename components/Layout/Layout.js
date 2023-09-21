import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout