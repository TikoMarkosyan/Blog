import DefaultLayout from '@layouts/default';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/post.module.css'
export default function PostLayout(props){
    console.log(props)
    return (
        <DefaultLayout>
            <style global  jsx>{`
        img[alt=Js] { width: 200px; }
      `}</style>
            <Head >
                <title>{props.title}</title>
            </Head>
            <article className={styles.center}>
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
            </article>
            <p><Link href="/posts"><a className={styles.forback}>back to list</a></Link></p>
        </DefaultLayout>
    )
}