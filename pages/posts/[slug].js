import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPostIds, getPostMdxData } from '../../lib/posts'
import Layout from '@/components/Layout/Layout'

const Post = ( {mdxData} ) => {
    const Component = React.useMemo(() => getMDXComponent(mdxData.code), [mdxData.code])
    return (
        <Layout>
            <div>
                <h1>{mdxData.frontmatter.title}</h1>
                <p>{mdxData.frontmatter.description}</p>
                <p>{mdxData.slug}</p>
                <div>
                    <Component />
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticProps({ params }) {

    const mdxData = await getPostMdxData(params.slug)

    return {
        props: {
            mdxData,
        },
    };
}


export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export default Post