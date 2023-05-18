import { GetStaticPaths } from 'next'
import styles from '@/styles/Post.module.css';
import { SiteHeader } from '@/components/SiteHeader';
import { getAllPostsWithSlug, getPost } from '../../lib/wordpress';

export default function Blog({ post }) {

    return (
        <main className={styles.main}>
            <SiteHeader />
        
            <article className={styles.article}>
                <h1> {post.title} </h1>
                <div> {post.date }</div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
    previewData,
}) => {
    const data = await getPost(params?.slug, preview, previewData)

    return {
        props: {
            preview,
            post: data.post,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllPostsWithSlug()

    console.log(allPosts);

    return {
        paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
        fallback: false,
    }
}