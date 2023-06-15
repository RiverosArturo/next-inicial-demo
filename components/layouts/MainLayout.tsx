import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

const inter = Inter({ subsets: ['latin'] });

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
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
