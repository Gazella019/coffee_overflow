import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPostIds, getPostMdxData } from '../../lib/posts'
import styles from './mdxStyle.module.css'
import CategoryCardOne from '@/components/CategoryCard/CategoryCardOne'

const Post = ( {mdxData: {slug, code, frontmatter}} ) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code])
    return (
        <div>
            <div className={styles.mdxWrapper}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.description}</p>
                <p>{slug}</p>
                <div>
                    <Component 
                        components={{CategoryCardOne}}
                    />
                </div>
            </div>
        </div>
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