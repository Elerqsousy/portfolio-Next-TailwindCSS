'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import Layout from '@/conponents/Layout';
import AnimatedText from '@/conponents/AnimatedText';
import { LinkArrow } from '@/conponents/icons';
import TransitionEffect from '@/conponents/TransitionEffect';
import { ContactFormContext } from '@/conponents/Context';
import profilePicLight from '../../public/images/profile/riz-art.png';
import profilePicDark from '../../public/images/profile/riz-art-dark.png';

const Home = () => {
  const { setIsOpen } = React.useContext(ContactFormContext);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <Head>
        <title>Mahmoud Rizk</title>
        <meta
          name='description'
          content='A personal portfolio for Mahmoud Rizk. A Full Stack developer working with Ruby on Rails, React, Next.js, Redux, SQL, HTML, CSS, TailwindCSS, Bootstrap, and Sass.'
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen relative dark:text-light md:items-start md:pt-16'>
        <Layout className='!pt-0'>
          <div className='h-[100vh] flex items-center justify-between w-full gap-16 lg:flex-col lg:justify-start xs:gap-10'>
            <div className='w-1/3 min-w-[350px] flex justify-center lg:hidden md:flex'>
              <Image
                src={
                  currentTheme === 'dark' ? profilePicDark : profilePicLight
                }
                alt='Mahmoud Rizk'
                className='w-auto h-full rounded-[42%] mb-12  md:w-[80vw] md:!m-0'
                priority
                sizes='(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-2/3 flex flex-col items-center self-center lg:w-full lg:text-center lg:justify-center lg:h-screen md:justify-start'>
              <AnimatedText
                text='Turning Vision Into Reality.'
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                My name is Rizk, a <span className='text-primary dark:text-primaryDark'>Fullstack Developer</span>. I am committed to
                transforming concepts into cutting-edge web applications. I
                invite you to explore my recent projects, which demonstrate my
                proficiency in various programming languages and technical
                skills.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/Mahmoud Rizk - Resume.pdf'
                  target={'_blank'}
                  download
                  className='flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light
                  md:p-2 md:px-4 md:text-base'
                >
                  Resume <LinkArrow className={'w-5 ml-1'} />
                </Link>
                <button
                  onClick={() => setIsOpen(true)}
                  className='ml-4 text-lg font-medium capitalize text-primary underline dark:text-primaryDark
                  md:text-base'
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;
