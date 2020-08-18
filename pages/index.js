import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Blog(props){
    console.log(props)
    return (
        <DefaultLayout title={props.title} description={props.description}>
          <h1>somthing ...</h1>
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
