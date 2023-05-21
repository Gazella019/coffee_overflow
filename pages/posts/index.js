import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getPostsData } from '../../lib/posts'
import styles from './posts.module.css'
import Layout from '@/components/Layout/Layout'
import BlogCardFour from '@/components/BlogCard/BlogCardFour'

const Home = ({ allPosts }) => {

    const [postList, setPostList] = useState(allPosts);
    function changeList() {
        let newlist = postList;
        // newlist.filter((post) => post.category === "travel");
        setPostList(newlist[0]);
        console.log(newlist);
        console.log(postList);
    }
    // setPostList(allPosts);
    return (
    <Layout>
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
        <BlogCardFour allPosts={allPosts}/>
        {postList.map(post => (
            <h1>
                {post.category}
            </h1>
        ))}
        </div>
        <div onClick={() => changeList()}>
            travel
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