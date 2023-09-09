import React from 'react'
import styles from './BlogCardFour.module.css'
import Link from 'next/link'
import { staggerChildernAnimate, galleryAnimation } from '@/utils/animations'
import { motion, AnimatePresence } from "framer-motion"
// import data from '@/data/blogPost.json'

const BlogCardFour = ({allPosts}) => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.wrapper} 
      initial="initial"
      animate="animate" 
      variants={staggerChildernAnimate}
      >
        <AnimatePresence>
          {allPosts.map((post, index) =>
                <motion.div
                variants={galleryAnimation}
                // 這樣沒辦法staggerchildren
                // initial={{opacity: 0, y: 100}}
                // animate={{opacity: 1, y: 0}}
                // exit={{opacity: 0}}
                // transition={{duration:0.5}}
                key={post.title}
                className={styles.blog_card}>
                  <Link href={`/posts/${post.id}`}>
                    <motion.div className={styles.blog_box}>
                      <img className={styles.blog_image} src={post.imgUrl}/>
                      {/* hello */}
                    </motion.div>
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
