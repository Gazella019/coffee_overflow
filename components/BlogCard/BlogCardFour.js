import React from 'react'
import styles from './BlogCardFour.module.css'
import Link from 'next/link'
// import data from '@/data/blogPost.json'

const BlogCardFour = ({allPosts}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {allPosts.map((post, index) =>
          <Link href={`/posts/${post.id}`} className={styles.blog_card}>
              <div className={styles.blog_image}>
                <img src={post.imgUrl}/>
                {/* hello */}
              </div>
              <div className={styles.blog_text}>
                <div className={styles.blog_title}>
                  {post.title}
                </div>
                <p>
                  {post.description}
                </p>
                <button className={styles.blog_btn}>
                  Read More
                </button>
              </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default BlogCardFour
