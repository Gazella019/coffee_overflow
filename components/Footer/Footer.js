import React from 'react'
import styles from "./Footer.module.css"
import { BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p>
            123 Demo Street
            Brooklyn, NY 12345
          </p>          
        </div>
        <div className={styles.logo}>
          <h2>
            Coffee Overflow
          </h2>
          <p>
            a place will come up with
          </p>
        </div>
        <div className={styles.links}>
          <BsFacebook/>
          <BsInstagram/>
          <BsGithub/>
        </div>
      </div>
    </div>
  )
}

export default Footer