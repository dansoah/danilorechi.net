import { GetStaticProps } from 'next'
import {  getBlogHomePosts } from '../lib/wordpress';
import Link from 'next/link'
import { SiteHeader } from '@/components';
import styles from '@/styles/Blog.module.scss';

export default function Blog({ allPosts: { edges }, preview }) {
    const heroPost = edges[0]?.node
    const morePosts = edges.slice(1)

    return (
        <main className={styles.main}>
            <SiteHeader />
            
            <section>
                <ul>
                    {
                        edges.map(edge => {
                            return (<li key={edge.node.slug}> <Link href={"/posts/" + edge.node.slug}>{edge.node.title}</Link> </li>)
                        })
                    }
                </ul>
            </section>
            
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getBlogHomePosts(preview)

    return {
        props: { allPosts, preview },
    }
}