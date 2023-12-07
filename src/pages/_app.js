import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';

import Footer from '@/conponents/Footer';
import NavBar from '@/conponents/NavBar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <ThemeProvider enableSystem={true} attribute='class'>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </main>
    </>
  );
}
