import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import styles from '../../styles/about.module.css';
export default function About(){
    return (
        <DefaultLayout>
            <div className={styles.aboutSection}>
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <div className={styles.h2}>
                 <h2 className={styles.fortext}>Our Team</h2>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="../images/team1.jpg" alt="Jane" className={styles.forImg}/>
                            <div className={styles.container}>
                                <h2>Jane Doe</h2>
                                <p className={styles.title}>CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <p>
                                    <button className={styles.button}>Contact</button>
                                </p>
                            </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="../images/team2.jpg" alt="Mike" className={styles.forImg}/>
                            <div className={styles.container}>
                                <h2>Mike Ross</h2>
                                <p className={styles.title}>Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p>
                                    <button className={styles.button}>Contact</button>
                                </p>
                            </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="../images/team3.jpg" alt="John" className={styles.forImg} />
                            <div className={styles.container}>
                                <h2>John Doe</h2>
                                <p className={styles.title}>Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p>
                                    <button className={styles.button}>Contact</button>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

