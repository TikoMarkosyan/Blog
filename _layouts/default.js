import Head from 'next/head'
import Header from '@includes/header'
import Footer from '@includes/footer'

export default function DefaultLayout({title = "Blog",description,children}){
    return (
        <main>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <link rel='stylesheet' href='/style.css'/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}