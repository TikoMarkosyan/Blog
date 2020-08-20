import styles from '../styles/header.module.css'
import Link from 'next/link'
import Head from "next/head";
export default function Header(){

    return (
        <header>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.header}>
                <div>
                    <ul className={styles.headerUl}>
                        <li className={styles.headerLi}><Link href="/"><a className={styles.headerA}>Home</a></Link></li>
                        <li className={styles.headerLi}><Link href="/posts"><a className={styles.headerA}> Posts</a></Link></li>
                        <li className={styles.headerLi}><h1 className={styles.logo}>Blog</h1></li>
                        <li className={styles.headerLi}><Link href="/contact"><a className={styles.headerA}>Contact</a></Link></li>
                        <li className={styles.headerLi}><Link href="/about"><a className={styles.headerA}>About</a></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}