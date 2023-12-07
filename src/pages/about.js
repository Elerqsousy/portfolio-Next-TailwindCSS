import React from 'react';
import Head from 'next/head';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

import AnimatedText from '@/conponents/AnimatedText';
import Layout from '@/conponents/Layout';
import Skills from '@/conponents/Skills';
import Experience from '@/conponents/Experience';
import Education from '@/conponents/Education';

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
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-6 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                About me
              </h2>
              <p className='font-medium '>
                Hi, I'm Mahmoud Rizk, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className='font-medium my-4'>
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className='font-medium '>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <ul className='col-span-2 flex flex-col items-end justify-between list-none'>
              <li className='flex flex-col items-end justify-center'>
                <span className='inline-block text-6xl font-bold'>
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  Years in Tech
                </h2>
              </li>
              <li className='flex flex-col items-end justify-center'>
                <span className='inline-block text-6xl font-bold'>
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  Years in Business
                </h2>
              </li>
              <li className='flex flex-col items-end justify-center'>
                <span className='inline-block text-6xl font-bold'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
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
