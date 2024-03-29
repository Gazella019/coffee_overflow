import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler'
import rehypePrismPlus from 'rehype-prism-plus'
// import remarkPrism from "remark-prism";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, ''),
            }
        }
    })
}


export function getPostData(slug) {
    
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    return {
        slug,
        ...matterResult.data,
    }
}

export async function getPostMdxData(slug) {
    
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdxSource = fs.readFileSync(fullPath, 'utf8')
    
    const result = await bundleMDX({
        source: mdxSource,
        mdxOptions(options, frontmatter) {
            // this is the recommended way to add custom remark/rehype plugins:
            // The syntax might look weird, but it protects you in case we add/remove
            // plugins in the future.
            // options.remarkPlugins = [
            //   ...(options.remarkPlugins ?? []),
            //   remarkExtractFrontmatter,
            //   [remarkTocHeadings, { exportRef: toc }],
            //   remarkGfm,
            //   remarkCodeTitles,
            //   [remarkFootnotes, { inlineNotes: true }],
            //   remarkMath,
            //   remarkImgToJsx,
            // ]
            options.rehypePlugins = [
              ...(options.rehypePlugins ?? []),
              [rehypePrismPlus, { ignoreMissing: true }],
            ]
            return options;
          },
    })
      
    const {code, frontmatter} = result

    return {
        slug,
        code,
        frontmatter,
    }
}