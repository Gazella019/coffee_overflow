import React from 'react'
import Link from 'next/link'
import { getPostsData } from '../../lib/posts'
import styles from './posts.module.css'
import BlogCardOne from '@/components/BlogCard/BlogCardOne'

const Home = ({ allPosts }) => {

    return (
    <div>
      blog post home
      <div>
        {allPosts.map(post => {
            return (
                <li key={post.id} >
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        }) }
      </div>
      <BlogCardOne/>
    </div>
  )
}

export async function getStaticProps() {
    const allPosts = getPostsData();
    return {
        props: {
            allPosts,
        }
    }
}

export default Home