import React from 'react'
import styles from './Biography.module.css'

const Biography = () => {
  return (
    <div className={styles.container}>
        <div className={styles.education}>
            <h1>Work</h1>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src='mediatek.png'/>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.card_title}>
                        Mediatek
                    </div>
                    <div className={styles.card_subTitle}>
                        Software Engineer
                    </div>
                    <div className={styles.card_interval}>
                        2022/01 - present
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src='amazon.png'/>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.card_title}>
                        Amazon Ring
                    </div>
                    <div className={styles.card_subTitle}>
                        Software Engineer
                    </div>
                    <div className={styles.card_interval}>
                        2020/12 - 2022/01
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.education}>
            <h1>Education</h1>
            <div className={styles.card}>
                <div className={styles.card_logo}>
                    <img src='NTHU.png'/>
                </div>
                <div className={styles.card_content}>
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

            <div className={styles.card}>
                <div className={styles.card_logo}>
                    <img src='CCU.png'/>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.card_title}>
                        National Chung Cheng University
                    </div>
                    <div className={styles.card_subTitle}>
                        Communication Engineering
                    </div>
                    <div className={styles.card_interval}>
                        2014/07 - 2018/08
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Biography