import { GetStaticProps } from 'next'
import {  getBlogHomePosts } from '../lib/wordpress';
import Link from 'next/link'

export default function Blog({ allPosts: { edges }, preview }) {
    const heroPost = edges[0]?.node
    const morePosts = edges.slice(1)

    console.log(edges);

    return (
        <main>
            Blog:
            <ul>
            {
                edges.map( edge => {
                    console.log(edge);
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