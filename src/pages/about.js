import React from 'react';
import Head from 'next/head';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

import AnimatedText from '@/conponents/AnimatedText';
import Layout from '@/conponents/Layout';
import Skills from '@/conponents/Skills';
import Experience from '@/conponents/Experience';
import Education from '@/conponents/Education';
import TransitionEffect from '@/conponents/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = React.useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInveiw = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInveiw) {
      motionValue.set(value);
    }
  }, [isInveiw, value, motionValue]);

  React.useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Mahmoud Rizk | About</title>
        <meta
          name='description'
          content='Mahmoud Rizk Portfolio. About and Experience Section.'
        />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text:light pt-24 lg:pt-16'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 md:gap-8'>
            <div className='col-span-6 flex flex-col items-start justify-start md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                About me
              </h2>
              <p className='font-medium '>
                Hi, I am Rizk, a highly ambitious, self-motivated, and driven
                software engineer based in Egypt. With a strong educational
                background, I successfully completed the Microverse Full-Stack
                Web Development program in 2023 and have been actively working in the field
                since early 2022.
              </p>
              <p className='font-medium my-4'>
                Prior to my software engineering journey, I gained valuable
                experience as a User and Market Research Consultant,
                accumulating seven years of expertise in areas such as Business,
                Entrepreneurship, Social Development, and Training.
              </p>
              <p className='font-medium '>
                My unwavering belief in continuous growth drives me to
                constantly push the boundaries of what is possible in the
                technology realm. I possess a genuine passion for technology and
                its transformative potential. As I embark on my career journey,
                I eagerly anticipate the opportunities that lie ahead and remain
                receptive to new prospects that may arise.
              </p>
            </div>

            <ul className='col-span-2 flex flex-col items-end justify-between list-none md:col-span-8 md:flex-row'>
              <li className='flex flex-col items-end justify-center lg:items-center'>
                <span
                  className='inline-block text-6xl font-bold text-primary dark:text-primaryDark
                md:flex md:justify-center md:w-full md:text-6xl sm:text-5xl xs:text-4xl'
                >
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  Years in Tech
                </h2>
              </li>
              <li className='flex flex-col items-end justify-center lg:items-center'>
                <span
                  className='inline-block text-6xl font-bold text-primary dark:text-primaryDark
                md:flex md:justify-center md:w-full md:text-6xl sm:text-5xl xs:text-4xl'
                >
                  <AnimatedNumbers value={7} />+
                </span>
                <h2
                  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  Years in Business
                </h2>
              </li>
              <li className='flex flex-col items-end justify-center lg:items-center'>
                <span
                  className='inline-block text-6xl font-bold text-primary dark:text-primaryDark
                md:flex md:justify-center md:w-full md:text-6xl sm:text-5xl xs:text-4xl'
                >
                  <AnimatedNumbers value={50} />+
                </span>
                <h2
                  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  Tech Projects
                </h2>
              </li>
            </ul>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
