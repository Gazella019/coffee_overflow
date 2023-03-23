import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className={styles.navbar_main}> 
        <div className={styles.navbar_logo}>
            <Link href={'/'}>
                <img src='./logo.png'/>
            </Link>
        </div>
        <ul className={styles.navbar_list}>
            <li>
                <Link href={'./posts/'}>
                    Blog
                </Link>
            </li>
            <li>
                <Link href={'/about/'}>
                    About
                </Link>
            </li>
            <li>
                <Link href={'/gallery/'}>
                    Gallery
                </Link>
            </li>
            <li>
                <Link href={'/contact/'}>
                    Contace
                </Link>
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
