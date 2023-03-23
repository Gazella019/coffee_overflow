import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className={styles.navbar_main}> 
        <div className={styles.navbar_logo}>
            <img src='./logo.png'/>
        </div>
        <ul className={styles.navbar_list}>
            <li>
                <Link href={'./posts/'}>
                    Blog
                </Link>
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
        <div className={styles.navbar_icons}>
            <BsFacebook className={styles.navbar_icon}/>
            <BsInstagram className={styles.navbar_icon}/>
            <BsGithub className={styles.navbar_icon}/>
        </div>
    </div>
  )
}

export default Navbar
