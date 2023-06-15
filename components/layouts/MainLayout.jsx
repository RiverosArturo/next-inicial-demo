import Head from 'next/head';
import { Navbar } from '../Navbar';
import { Inter } from 'next/font/google';

import styles from './MainLayout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const MainLayout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Home - Arturo</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={`${styles.main} ${inter.className}`}>

                { children }

            </main>
        </>
    );
}
