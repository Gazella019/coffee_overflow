import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <div className={styles.navbar_main}>
            <div className={styles.navbar_logo}>
                <Link href={'/'}>
                    <Image src='/logo.png'
                        width={500}
                        height={500}
                        alt="img"
                    />
                </Link>
            </div>
            <ul className={styles.navbar_list}>
                <li className={styles.nav_item}>
                    <Link href={'/posts/'}>
                        Blog
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href={'/about/'}>
                        About
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href={'/gallery/'}>
                        Gallery
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href={'/contact/'}>
                        Contact
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href={'/demo/'}>
                        Demo
                    </Link>
                </li>
            </ul>
            <div className={styles.navbar_icons}>
                <BsFacebook className={styles.navbar_icon}/>
                <BsInstagram className={styles.navbar_icon}/>
                <BsGithub className={styles.navbar_icon}/>
            </div>
        </div> 
    </div>
  )
}

export default Navbar
