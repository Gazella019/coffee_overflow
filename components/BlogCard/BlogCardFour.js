import React from 'react'
import styles from './BlogCardFour.module.css'
import data from '@/data/blogPost.json'

const BlogCardFour = () => {
  return (
    <div className={styles.container}>
      {data.map((post, index) =>
      <div className={styles.blog_card}>
        <div className={styles.img}>
          {post.title}
        </div>
        <div className={styles.blog_text}>
          <div className={styles.title}>
            {post.title}
          </div>
          <div className={styles.category}>
            {post.category}
          </div>
          <div className={styles.content}>
            {post.content}
          </div>
         c
        </div>
      </div>)}
    </div>
  )
}

export default BlogCardFour
