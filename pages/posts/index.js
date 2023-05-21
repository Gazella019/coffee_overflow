import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getPostsData } from '../../lib/posts'
import styles from './posts.module.css'
import Layout from '@/components/Layout/Layout'
import BlogCardFour from '@/components/BlogCard/BlogCardFour'
import Category from '@/components/Category/Category'

const Home = ({ allPosts }) => {

    const [postList, setPostList] = useState(allPosts);
    const [fileterList, setFilterList] = useState(allPosts);

    function filterListByCategory(listName) {
        const newlist = postList.filter((post) => post.category === listName);
        setFilterList(newlist);
    }
    // setPostList(allPosts);
    return (
    <Layout>
        <Category postList={postList} filterListByCategory={filterListByCategory}/>
        <div>
        {/* <div>
            {allPosts.map(post => {
                return (
                    <li key={post.id} >
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                        <h1>
                            {post.imgUrl}
                        </h1>
                    </li>
                )
            }) }
        </div> */}
        <BlogCardFour allPosts={fileterList}/>
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