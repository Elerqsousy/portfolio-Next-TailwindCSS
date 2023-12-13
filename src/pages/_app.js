import React from 'react';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import '@/styles/globals.css';

import Footer from '@/conponents/Footer';
import NavBar from '@/conponents/NavBar';
import ContactForm from '@/conponents/ContactForm';
import { ContactFormContext } from '@/conponents/Context';
import NewContactForm from '@/conponents/NewContactForm';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen relative`}
      >
        <ThemeProvider enableSystem={true} attribute='class'>
          <ContactFormContext.Provider value={{ isOpen, setIsOpen }}>
            <NewContactForm />
            <NavBar />
            <AnimatePresence mode='wait'>
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <Footer />
          </ContactFormContext.Provider>
        </ThemeProvider>
      </main>
    </>
  );
}
