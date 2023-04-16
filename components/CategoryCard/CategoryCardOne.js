import React from 'react'
import styles from '@/styles/CategoryCardOne.module.css'
import Title from '../Title/Title'

const CategoryCardOne = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Title text={"Blogs"}/>
            </div>
            <div className={styles.card_section}>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1679521878363-6987b06a30f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"/>
                    <div className={styles.card_body}>
                        <h1 className={styles.card_title}>
                            NYC
                        </h1>
                        <p className={styles.card_subtitle}>
                            new york city
                        </p>
                        <p className={styles.card_info}>
                        This is for beginners, learn to create simple but amazing card hover effect using only CSS in 2022. Very east to understand explanation with source code
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1679597454618-d1ae16573606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"/>
                    <div className={styles.card_body}>
                        <h1 className={styles.card_title}>
                            NYC
                        </h1>
                        <p className={styles.card_subtitle}>
                            new york city
                        </p>
                        <p className={styles.card_info}>
                        This is for beginners, learn to create simple but amazing card hover effect using only CSS in 2022. Very east to understand explanation with source code
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1586987949297-30be6391da83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"/>
                    <div className={styles.card_body}>
                        <h1 className={styles.card_title}>
                            NYC
                        </h1>
                        <p className={styles.card_subtitle}>
                            new york city
                        </p>
                        <p className={styles.card_info}>
                        This is for beginners, learn to create simple but amazing card hover effect using only CSS in 2022. Very east to understand explanation with source code
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryCardOne