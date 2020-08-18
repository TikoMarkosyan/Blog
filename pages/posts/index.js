import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import styles from '../../styles/post.module.css'
export default function Posts(props){

    return (
        <DefaultLayout title={props.title} description={props.description}>
            <h1 className={styles.heading}>List of posts</h1>
            <ul>
                {props.posts.map(function(post, idx){
                    return (
                        <li key={idx} className={styles.forli}>
                            <Link href={'/posts/'+post.slug}>
                                <a className={styles.fora}>{post.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </DefaultLayout>
    )
}

export async function getStaticProps(){
    const config = await getConfig()
    const allPosts = await getAllPosts()
    console.log(config)
    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}