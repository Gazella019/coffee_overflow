import React from 'react'
import styles from '@/styles/BlogCardOne.module.css'
import blogData from '@/data/blogcard'
// import heroSliderData from "../../data/hero-sliders/hero-slider-ten.json";

const BlogCardOne = () => {
  
  return (
    <section className={styles.container}>
        <div className={styles.blog_card}>
          <div className={styles.blog_img}>
            <img src={blogData[0].imgUrl}/>
          </div>
          <div className={styles.blog_content}>
            <h1>{blogData[0].title}</h1>
            <h3>{blogData[0].date} <span>{blogData[0].category}</span></h3>
            <p>{blogData[0].content}</p>
          </div>
        </div>

        <div className={styles.blog_card}>
          <div className={styles.blog_img}>
            <img src={blogData[1].imgUrl}/>
          </div>
          <div className={styles.blog_content}>
            <h1>{blogData[1].title}</h1>
            <h3>{blogData[1].date} <span>{blogData[0].category}</span></h3>
            <p>{blogData[1].content}</p>
          </div>
        </div>
    </section>
  )
}

export default BlogCardOne
