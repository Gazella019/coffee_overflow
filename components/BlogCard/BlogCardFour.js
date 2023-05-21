import React from 'react'
import styles from './BlogCardFour.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
// import data from '@/data/blogPost.json'

const BlogCardFour = ({allPosts}) => {
  return (
    <div className={styles.container}>
      <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout className={styles.wrapper}>
        <AnimatePresence>
        {allPosts.map((post, index) =>
            <Link href={`/posts/${post.id}`}>
              <motion.div layout className={styles.blog_card}>
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
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default BlogCardFour
