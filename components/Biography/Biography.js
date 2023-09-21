import React, { useRef, useEffect } from 'react'
import styles from './Biography.module.css'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'

const Biography = () => {

    const ref = useRef(null);
    // const isInview = useInView(ref, {once: true});
    // const mainControls = useAnimation();

    // useEffect(() => {
    //     if (isInview) {
    //         mainControls.start("visible")
    //     }
    // }, [isInview])
    return (
        <div ref={ref} className={styles.container}>
            <motion.div
            variants={{
                hidden: {opacity:0, y:75},
                visible: {opacity:1, y:0},
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition= {{duration: .6}}
            className={styles.work}>
                <h1>Work</h1>
                <div className={styles.card}>
                    <div className={styles.card_logo}>
                        <Image src='/mediatek.png'
                            width={150}
                            height={75}
                            alt="mediatek"
                            className={styles.card_img}
                        />
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
                        <Image src='/amazon.png'
                            width={100}
                            height={50}
                            alt="amazon"
                            className={styles.card_img}
                        />
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
            viewport={{ once: true, amount: 0.8 }}
            transition= {{duration: .6}}
            >
                <h1>Education</h1>
                <div className={styles.card}>
                    <div className={styles.card_logo}>
                        <Image src='/NTHU.png'
                            width={100}
                            height={100}
                            alt="NTHU"
                            className={styles.card_img}
                        />
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
                        <Image src='/CCU.png'
                            width={100}
                            height={100}
                            alt="CCU"
                            className={styles.card_img}
                        />
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