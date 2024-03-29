import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getPostsData } from '../../lib/posts'
import styles from '@/styles/page.module.css'
import BlogCardFour from '@/components/BlogCard/BlogCardFour'
import Category from '@/components/Category/Category'
import { motion } from 'framer-motion'

const Home = ({ allPosts }) => {

    const [postList, setPostList] = useState(allPosts);
    const [fileterList, setFilterList] = useState(allPosts);

    function filterListByCategory(listName) {
        if (listName == "all") {
            setFilterList(postList);
            return;
        }
        const newlist = postList.filter((post) => post.category === listName);
        setFilterList(newlist);
    }
    // setPostList(allPosts);
    return (
    <div>
        <Category postList={postList} filterListByCategory={filterListByCategory}/>
        <div>
            <BlogCardFour allPosts={fileterList}/>
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