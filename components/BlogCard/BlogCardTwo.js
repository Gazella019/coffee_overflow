import React from 'react'
import styles from '@/styles/BlogCardTwo.module.css'
import blogData from '@/data/blogcard'
import ButtonOne from '@/components/Button/ButtonOne.js'

const BlogCardTwo = () => {
  return (
    <section className={styles.container}>
        <div className={styles.blog_card}>
          <div className={styles.blog_img}>
            <img src={blogData[0].imgUrl}/>
          </div>
          <div className={styles.blog_content}>
            <div className={styles.blog_description}>
              <h1>{blogData[0].title}</h1>
              <h3>{blogData[0].date} <span>{blogData[0].category}</span></h3>
            </div>
            <ButtonOne/>
          </div>
        </div>

        <div className={styles.blog_card}>
          <div className={styles.blog_img}>
            <img src={blogData[1].imgUrl}/>
          </div>
          <div className={styles.blog_content}>
            <h1>{blogData[1].title}</h1>
            <h3>{blogData[1].date} <span>{blogData[0].category}</span></h3>
            <ButtonOne/>
          </div>
        </div>
    </section>
  )
}

export default BlogCardTwo
