import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Thanks() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Form</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Form successfully submitted!
        </h1>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
