import React from 'react'
import Link from 'next/link'
import { getPostsData } from '../../lib/posts'
import styles from './posts.module.css'
import Layout from '@/components/Layout/Layout'
import BlogCardOne from '@/components/BlogCard/BlogCardOne'
import BlogCardFour from '@/components/BlogCard/BlogCardFour'

const Home = ({ allPosts }) => {

    return (
    <Layout>
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
        <BlogCardFour/>
        </div>
    </Layout>
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