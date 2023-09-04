import React from 'react'
import styles from './BlogCardFour.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
// import data from '@/data/blogPost.json'

const BlogCardFour = ({allPosts}) => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.wrapper}>
      <AnimatePresence>
        {allPosts.map((post, index) =>
              <motion.div 
              animate={{opacity: 1}}
              initial={{opacity: 0}}
              exit={{opacity: 0}}
              transition={{duration:0.4}}
              key={post.title}
              // layout 
              className={styles.blog_card}>
                <Link href={`/posts/${post.id}`}>
                <div className={styles.blog_image}>
                  <img src={post.imgUrl}/>
                  {/* hello */}
                </div>
                <div className={styles.blog_text}>
                  <div className={styles.blog_title}>
                    {post.title}
                  </div>
                  <p className={styles.blog_description}>
                    {post.description}
                  </p>
                  <button className={styles.blog_btn}>
                    Read More
                  </button>
                </div>
                </Link>
            </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  )
}

export default BlogCardFour
