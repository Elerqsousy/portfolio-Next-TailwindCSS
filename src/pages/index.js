"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import Layout from '@/conponents/Layout';
import AnimatedText from '@/conponents/AnimatedText';
import { LinkArrow } from '@/conponents/icons';
import profilePicLight from '../../public/images/profile/riz-art.png';
import profilePicDark from '../../public/images/profile/riz-art-dark.png';

const Home = () => {
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
      <main className='flex items-center text-dark w-full min-h-screen relative dark:text-light md:items-start'>
        <Layout className='!pt-0'>
          <div className='flex items-center justify-between w-full gap-16 lg:flex-col sm:gap-10'>
            <div className='w-1/3 min-w-[350px] flex justify-center'>
              {currentTheme === 'dark' ? (
                <Image
                  src={currentTheme === 'dark' ? profilePicDark : profilePicLight}
                  alt='Mahmoud Rizk'
                  className='w-auto h-full rounded-[42%] mt-4 mb-32 lg:hidden md:inline-block md:w-[80vw] md:!m-0'
                  priority
                  sizes='(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw'
                />
              ) : (
                <Image
                  src={profilePicLight}
                  alt='Mahmoud Rizk'
                  className='w-auto h-full rounded-[42%] mt-4 mb-32 lg:hidden md:inline-block md:w-[80vw] md:!m-0'
                  priority
                  sizes='(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw'
                />
              )}
            </div>
            <div className='w-2/3 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='Turning Vision Into Reality.'
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/dummy.pdf'
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
                <Link
                  href='mailto:marizk.pro@gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Home;
