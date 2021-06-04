import Head from "next/head";
import styles from '../styles/Home.module.css'

const List = ({data}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Google Sheets Data Output</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Data From Google Sheets
                </h1>
            <div>
                <p>Test - ({data.name})</p>
                <p>Test</p>
                <p>Test</p>
                {/* {users.map(user => <div>{user.name}</div>)} */}
                {/* <h2>{data}</h2> */}
        </div>
        </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export async function getServerSideProps () {
    const res = await fetch(``);
    const data = await res.json();
    console.log (data);
    return {
        props: { data }, notFound: false
    }
}
export default List;