import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import styles from '../../styles/post.module.css'
import ContactLayout from "@layouts/contacts";

export default function Contact(props){

    return (
        <DefaultLayout>
            <ContactLayout>

            </ContactLayout>
        </DefaultLayout>
    )
}