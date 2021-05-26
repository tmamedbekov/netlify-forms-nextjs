import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Hide() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hidden Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    You found the hidden page
        </h1>
        <p>
            See the Spreadsheet 
        </p>

        <div className={styles.grid}>
          <a href="https://docs.google.com/spreadsheets/d/1-m9KzAXuPsqbX_uquTXtYjgeKalO4kKoZEYhUX3yL-w/edit?usp=sharing" className={styles.card}>
            <h2>Google Sheets with Submittions</h2>
          </a>
          </div>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

