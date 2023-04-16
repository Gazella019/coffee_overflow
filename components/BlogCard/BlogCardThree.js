import React from 'react'
import styles from './BlogCardThree.module.css'

const blogData = [
  {
    category: "travel",
    title: "trip planning for total beginners",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",    
    imgUrl: "https://images.unsplash.com/photo-1679345506343-7e2c30fdad0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    category: "travel",
    title: "7 ways to survive in the desert",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",    
    imgUrl: "https://images.unsplash.com/photo-1678723097718-8c7f5ece3a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
  },
  {
    category: "travel",
    title: "5 amazing travel destinations",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",    
    imgUrl: "https://images.unsplash.com/photo-1676496307700-d118f330fd5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2587&q=80",
  },
  {
    category: "travel",
    title: "travel pro-tips from canadians",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",    
    imgUrl: "https://images.unsplash.com/photo-1678811118543-14d19cb00508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
  },
]
const BlogCardThree = () => {
  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {blogData.map(blog => (
              <div className={styles.blog_card}>
                <div className={styles.blog_img}>
                  {/* hello */}
                  <img src={blog.imgUrl}/>
                </div>
                <div className={styles.blog_content}>
                  <h2>{blog.category}</h2>
                  <h1>
                    {blog.title}
                  </h1>
                  <p>
                    {blog.content}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default BlogCardThree