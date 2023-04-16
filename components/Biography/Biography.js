import React from 'react'
import styles from './Biography.module.css'

const Biography = () => {
  return (
    <div className={styles.container}>
        <div className={styles.education}>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src='NTHU.png'/>
                </div>
                <div className={styles.card_title}>
                    National Tsing Hua University
                </div>
                <div className={styles.card_subTitle}>
                    Computer Since
                </div>
                <div className={styles.card_interval}>
                    2018/07 - 2020/08
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_img}>

                </div>
                <div className={styles.card_title}>
                    National Tsing Hua University
                </div>
                <div className={styles.card_subTitle}>
                    Computer Since
                </div>
                <div className={styles.card_interval}>
                    2018/07 - 2020/08
                </div>
            </div>
        </div>
    </div>
  )
}

export default Biography