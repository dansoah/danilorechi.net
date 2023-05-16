import { GetStaticProps } from 'next'
import {  getBlogHomePosts } from '../lib/wordpress';
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader';

export default function Blog({ allPosts: { edges }, preview }) {
    const heroPost = edges[0]?.node
    const morePosts = edges.slice(1)

    return (
        <main>
            <SiteHeader />
            Blog:
            <ul>
            {
                edges.map( edge => {
                    return (<li key={edge.node.slug}> <Link href={"/posts/"+edge.node.slug}>{edge.node.title}</Link> </li>)
                })
            }
            </ul>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getBlogHomePosts(preview)

    return {
        props: { allPosts, preview },
    }
}