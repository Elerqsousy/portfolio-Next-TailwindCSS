import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/conponents/Layout';
import profilePic from '../../public/images/profile/riz-art.png';
import AnimatedText from '@/conponents/AnimatedText';
import { LinkArrow } from '@/conponents/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahmoud Rizk</title>
        <meta name='description' content='A personal portfolio for Mahmoud Rizk. A Full Stack developer working with Ruby on Rails, React, Next.js, Redux, SQL, HTML, CSS, TailwindCSS, Bootstrap, and Sass.' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen relative'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full gap-16'>
            <div className='w-1/3 min-w-[350px] flex justify-center'>
              <Image
                src={profilePic}
                alt='Mahmoud Rizk'
                className='w-auto h-full rounded-[42%] mt-4 mb-32'
              />
            </div>
            <div className='w-2/3 flex flex-col self-center'>
              <AnimatedText
                text='Turning Vision Into Reality With Code And Design.'
                className='text-6xl text-left'
              />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link
                  href='/dummy.pdf'
                  target={'_blank'}
                  download
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                >
                  Resume <LinkArrow className={'w-5 ml-1'} />
                </Link>
                <Link
                  href='mailto:marizk.pro.gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline'
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
