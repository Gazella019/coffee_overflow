import React from 'react'
import Link from 'next/link'
import { getPostsData } from '../../lib/posts'

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