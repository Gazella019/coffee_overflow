import React, { useRef, useEffect } from 'react'
import styles from './Biography.module.css'
import { motion, useInView, useAnimation } from 'framer-motion'

const Biography = () => {

    const ref = useRef(null);
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainControls.start("visible")
        }
    }, [isInview])
    return (
        <div ref={ref} className={styles.container}>
            <motion.div
            variants={{
                hidden: {opacity:0, y:75},
                visible: {opacity:1, y:0},
            }}
            initial="hidden"
            animate={mainControls}
            className={styles.work}>
                <h1>Work</h1>
                <div className={styles.card}>
                    <div className={styles.card_logo}>
                        <img src='mediatek.png'/>
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.card_title}>
                            Mediatek
                        </div>
                        <div className={styles.card_subTitle}>
                            <div className={styles.card_position}>
                                Software Engineer
                            </div>
                            <div className={styles.card_interval}>
                                2022/01 - present
                            </div>
                        </div>
                        <div className={styles.description}>
                            I am a software engineer in display driver
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_logo}>
                        <img src='amazon.png'/>
                    </div>
                    <div className={styles.card_content}>
                        <div className={styles.card_title}>
                        Amazon Ring
                        </div>
                        <div className={styles.card_subTitle}>
                            <div className={styles.card_position}>
                                Software Engineer
                            </div>
                            <div className={styles.card_interval}>
                                2020/12 - 2022/01
                            </div>
                        </div>
                        <div className={styles.description}>
                            I am a software engineer in amazon sidewalk team
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div className={styles.education}
            variants={{
                hidden: {opacity:0, y:75},
                visible: {opacity:1, y:0},
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            >
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
                            <div className={styles.card_postion}>
                                Computer Since
                            </div>
                            <div className={styles.card_interval}>
                                2018/07 - 2020/08
                            </div>
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
                            <div className={styles.card_postion}>
                                Communication Engineering
                            </div>
                            <div className={styles.card_interval}>
                                2014/07 - 2018/08
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default Biography